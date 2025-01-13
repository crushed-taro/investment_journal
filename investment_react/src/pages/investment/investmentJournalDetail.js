import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { callInvestmentJournalDetailListAPI } from "../../apis/InvestmentJournalDetailAPICalls";

export default function InvestmentJournalDetail() {

    const params = useParams();
    const dispatch = useDispatch();
    const investmentJournalDetailList = useSelector(state => state.investjournaldetailReducer.data);

    console.log(params);
    console.log(investmentJournalDetailList);

    useEffect(() => {
        dispatch(callInvestmentJournalDetailListAPI(params.investmentCode));
    }, []);

    return (
        <>
            <h1>투자일지 상세보기</h1>
            {
                investmentJournalDetailList && investmentJournalDetailList.map(
                    (investmentJournalDetail, index) => (
                        <div key={index}>
                            <p>{investmentJournalDetail.investmentTicker}</p>
                            <p>{investmentJournalDetail.investmentStock}</p>
                            <p>{investmentJournalDetail.investmentSale}</p>
                        </div>
                    )
                )
            }
        </>
    );
}