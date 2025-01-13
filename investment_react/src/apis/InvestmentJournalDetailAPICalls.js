import { POST_INVEST_DETAIL_REGISTER, GET_INVEST_DETAIL } from "../modules/InvestmentJournalDetailModule";

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

export const callInvestmentJournalDetailListAPI = (investmentCode) => {
    const requestURL = `${process.env.REACT_APP_API_INVEST_DETAIL_LIST_URL}/${investmentCode}`;

    console.log('[InvestmentJournalDetailAPICalls] callInvestmentJournalDetailListAPI : ', investmentCode);
    console.log('[InvestmentJournalDetailAPICalls] callInvestmentJournalDetailListAPI URL : ', requestURL);

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Accept: '*/*',
				Authorization:
					'Bearer ' + window.localStorage.getItem('accessToken')
			}
		}).then((response) => response.json());

        console.log('[InvestmentJournalAPICalls] callInvestmentJournalListAPI RESULT : ', result);

        if (result.status === 201) {
            console.log("자산상세내역 불러오기를 완료되었습니다.");
        } else {
            console.error("자산상세내역 불러오기를 실패했습니다.");
        }

        dispatch({ type: GET_INVEST_DETAIL, payload: result });
        return result;

    };
}