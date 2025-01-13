import {
    POST_INVEST_REGISTER
} from "../modules/InvestmentJournalModule";

export const callInvestmentJournalRegistAPI = ({ form }) => {
    const requestURL = process.env.REACT_APP_API_INVEST_REGISTER_URL;

    console.log('[InvestmentJournalAPICalls] form RESULT : ', form);

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: '*/*',
            },
            body: JSON.stringify({
                investmentTitle: form.investmentJournalTitle,
                investmentDate: form.investmentJournalDate,
                investmentContents: form.investmentJournalContents,
                memberCode: window.localStorage.getItem('code'),
            }),
        }).then((response) => response.json());

        console.log('[InvestmentJournalAPICalls] callInvestmentJournalRegistAPI RESULT : ', result);

        if (result.status === 201) {
            console.log("자산 등록이 완료되었습니다.");
        } else {
            console.error("자산 등록에 실패했습니다.");
        }

        dispatch({ type: POST_INVEST_REGISTER, payload: result });
        return result;

    };
}