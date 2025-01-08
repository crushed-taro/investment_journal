import { POST_INVEST_DETAIL_REGISTER } from "../modules/InvestmentJournalDetailModule";

export const callInvestmentJournalDetailRegistAPI = (id, inputs) => async(dispatch) => {

    const requestURL = process.env.REACT_APP_API_INVEST_DETAIL_REGISTER_URL;

    for(const input of inputs) {

        console.log("[InvestmentJournalDetailAPICalls] callInvestmentJournalDetailRegistAPI : ", input);

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: '*/*',
                Authorization:
                    'Bearer'+ window.localStorage.getItem('accessToken')
            },
            body: JSON.stringify({
                investmentCode: id,
                investmentTicker: input.ticker,
                investmentStock: input.amount,
                investmentSale: input.buy_price,
            }),
        }).then((response) => response.json());

        console.log('[InvestmentJournalDetailAPICalls] callInvestmentJournalDetailRegistAPI RESULT : ', result);
        dispatch({ type: POST_INVEST_DETAIL_REGISTER, payload: result });
    }
};