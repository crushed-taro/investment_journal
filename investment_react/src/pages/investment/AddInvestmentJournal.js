import { useState } from "react";
import { useLog } from "../../components/context/LogContext";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { callInvestmentJournalRegistAPI } from "../../apis/InvestmentJournalAPICalls";
import { callInvestmentJournalDetailRegistAPI } from "../../apis/InvestmentJournalDetailAPICalls";

export default function AddInvestmentJournal() {

    const [ form, setForm ] = useState({
        investmentJournalTitle: "",
        investmentJournalContents: "",
        investmentJournalDate: "",
    });
    const [ inputs, setInputs ] = useState([]);
    const [ nextId, setNextId ] = useState(0);
    const [assets] = useState([
        { id: 1, ticker: "AAPL" },
        { id: 2, ticker: "MSFT" },
        { id: 3, ticker: "GOOGL" },
        { id: 4, ticker: "AMZN" },
        { id: 5, ticker: "TSLA" },
        { id: 6, ticker: "META" },
        { id: 7, ticker: "NVDA" },
        { id: 8, ticker: "BRK.B" },
        { id: 9, ticker: "JNJ" },
        { id: 10, ticker: "V" },
    ]);
    const log = useLog();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onClickAddInputsHandler = () => {
        setInputs([
            ...inputs,
            { id: nextId + 1, ticker: "", amount: "", buy_price: "" },
        ]);

        setNextId(nextId + 1);
    };

    const onClickRemoveInputHandler = (idToRemove) => {
        log("[AddInvestmentJournal] onClickRemoveInputHandler idToRemove : ", idToRemove);

        const removedList = inputs.filter(inputGroup => inputGroup.id !== idToRemove);
        setInputs(removedList);
    };

    const onChangeHandler = (e, id) => {
        log("[AddInvestmentJournal] onChangeHandler id : ", id);
        log("[AddInvestmentJournal] onChangeHandler target : ", e.target);

        let { name, value } = e.target;

        log("[AddInvestmentJournal] onChangeHandler name : ", name);
        log("[AddInvestmentJournal] onChangeHandler value : ", value);

        if (id !== undefined) {
            setInputs((prevInputs) => 
                prevInputs.map((input) =>
                    input.id === id ? { ...input, [name]: value } : input
                )
            );
        } else {
            setForm((prevForm) => ({
                ...prevForm,
                [name]: value,
            }));
        }

    };

    const onClickSaveInvestmentJournalHandler = async() => {
        log("[AddInvestmentJournal] onClickSaveInvestmentJournalHandler Called ")

        if(Object.values(form).some(value => !value)) {
            alert("모든 필수 입력값을 채워주세요.");
            return;
        }

        if(inputs.length === 0) {
            alert("하나 이상의 자산을 등록하세요.");
            return;
        }

        const result = await dispatch(callInvestmentJournalRegistAPI({
            form: form
        }))

        log("result : ", result);
        await dispatch(callInvestmentJournalDetailRegistAPI(result.id, inputs))

        alert("투자일지 추가를 성공했습니다.");

        setForm({
            investmentJournalTitle: "",
            investmentJournalContents: "",
            investmentJournalDate: "",
        });
        setInputs([]);

        navigate("/main", {replace: true});
    };

    return(
        <>
            <h1>투자일지 추가 화면</h1>

            <label> 투자 날짜 : </label>
            <input />
            <br />
            <label>투자 일지 제목 : </label>
            <input />
            <br />
            <label>투자 일지 내용 : </label>
            <input />

            <div>
                <button
                    onClick={onClickAddInputsHandler}
                >
                    자산 추가
                </button>
                <div>
                    <span>종목 티커명</span>
                    <span>수량</span>
                    <span>매수가격</span>
                </div>
                {inputs.map((inputGroup) => (
                    <div key={inputGroup.id}>
                        <select
                            name="ticker"
                            value={inputGroup.ticker}
                            onChange={(e) => onChangeHandler(e, inputGroup.id)}
                        >
                            <option value="">선택하세요</option>
                            {Array.isArray(assets) && assets.map((asset) => (
                                <option key={asset.id} value={asset.ticker}>
                                    {asset.ticker}
                                </option>
                            ))}
                        </select>
                        <input 
                            type="number"
                            name="amount"
                            placeholder="수량"
                            value={inputGroup.amount}
                            onChange={(e) => onChangeHandler(e, inputGroup.id)}
                        />
                        <input 
                            type="number"
                            name="buy_price"
                            placeholder="매수가격"
                            value={inputGroup.buy_price}
                            onChange={(e) => onChangeHandler(e, inputGroup.id)}
                        />
                        <button 
                            onClick={() => onClickRemoveInputHandler(inputGroup.id)}
                        >
                            삭제
                        </button>
                    </div>
                ))}
            </div>
            <button
                onClick={onClickSaveInvestmentJournalHandler}
            >
                투자일지 추가
            </button>
        </>

    );
}