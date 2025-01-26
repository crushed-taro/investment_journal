import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { 
    callInvestmentJournalListAPI,
    callDeleteInvestmentJournalAPI,
 } from "../apis/InvestmentJournalAPICalls";
import './Main.css';  

export default function Main() {

    const isLogin = window.localStorage.getItem('accessToken');
    const code = window.localStorage.getItem('code');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const investmentJournalList = useSelector(state => state.investjournalReducer.data || []);
    
    useEffect(() => {
        dispatch(callInvestmentJournalListAPI(code));
    }, []);

    const onClickAddInvestmentJournalHandler = () => {
        navigate("/main/addInvestmentJournal", { replace: true });
    };

    const onClickInvestmentJournalHandler = (investmentJournal) => {
        navigate(`/main/investmentJournalDetail/${investmentJournal.investmentCode}`, { replace: false });
    };

    const onClickDeleteInvestmentJournalHandler = async (investmentJournal) => {
        await dispatch(callDeleteInvestmentJournalAPI(investmentJournal));
        await dispatch(callInvestmentJournalListAPI(code));
    };

    function AfterLogin() {
        return (
            <>
                <h2>투자일지 목록입니다.</h2>
                <div className="container">
                    <button
                        className="btn btn-primary"
                        onClick={onClickAddInvestmentJournalHandler}
                    >
                        투자일지 추가
                    </button>
                    {
                        investmentJournalList && investmentJournalList.map(
                            (investmentJournal, index) => (
                                <div key={index} className="investment-journal-card" onClick={() => onClickInvestmentJournalHandler(investmentJournal)}>
                                    <div className="d-flex justify-content-between">
                                        <button
                                            className="delete-btn"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onClickDeleteInvestmentJournalHandler(investmentJournal);
                                            }}
                                        >
                                            삭제
                                        </button>
                                    </div>
                                    <h3>{investmentJournal.investmentTitle}</h3>
                                    <p>{investmentJournal.investmentDate}</p>
                                    <p>{investmentJournal.investmentContents}</p>
                                </div>
                            )
                        )
                    }
                </div>
            </>
        );
    }

    function BeforeLogin() {
        return (
            <div className="container text-center">
                <h1>투자일지 목록을 불러올 수 없습니다.</h1>           
            </div>
        );
    }

    return (
        <>
            {
                isLogin == null || isLogin === undefined ? 
                (
                    <BeforeLogin/>
                )
                :
                (
                    <AfterLogin/>
                )
            }
        </>
    );
}