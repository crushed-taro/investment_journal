import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { callInvestmentJournalListAPI } from "../apis/InvestmentJournalAPICalls";

export default function Main() {

    const isLogin = window.localStorage.getItem('accessToken');
    const code = window.localStorage.getItem('code');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const investmentJournalList = useSelector(state => state.investjournalReducer.data);
    
    console.log("investment journal list : ", investmentJournalList);

    useEffect(() => {
        dispatch(callInvestmentJournalListAPI(code));
    }, []);

    const onClickAddInvestmentJournalHandler = () => {
        navigate("/main/addInvestmentJournal", { replace: true });
    };

    const onClickInvestmentJournalHandler = (investmentJournal) => {
        navigate(`/main/investmentJournalDetail/${investmentJournal.investmentCode}`, { replace: false });
    };

    function AfterLogin() {
        return (
            <>
                <h2>투자일지 목록입니다.</h2>
                <button
                    onClick={onClickAddInvestmentJournalHandler}
                >
                    투자일지 추가
                </button>
                {
                    investmentJournalList && investmentJournalList.map(
                        (investmentJournal, index) => (
                            <div 
                                onClick={() => onClickInvestmentJournalHandler(investmentJournal)}
                                key={index}
                            >
                                <h3>{investmentJournal.investmentTitle}</h3>
                                <p>{investmentJournal.investmentDate}</p>
                                <p>{investmentJournal.investmentContents}</p>
                            </div>
                        )
                    )
                }
            </>
        );
    }

    function BeforeLogin() {
        return (
            <>
                <h1>투자일지 목록을 불러올 수 없습니다.</h1>           
            </>
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