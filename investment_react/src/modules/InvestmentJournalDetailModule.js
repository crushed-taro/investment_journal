
import { createActions, handleActions } from "redux-actions";

const initialState = {};

export const POST_INVEST_DETAIL_REGISTER = "investjournaldetail/POST_INVEST_DETAIL_REGISTER";
export const GET_INVEST_DETAIL = "investjournaldetail/GET_INVEST_DETAIL";

const actions = createActions({
    [POST_INVEST_DETAIL_REGISTER]: () => {},
    [GET_INVEST_DETAIL]: () => {},
});

const investjournaldetailReducer = handleActions(
    {
        [POST_INVEST_DETAIL_REGISTER]: (state, { payload }) => {
            return payload;
        },
        [GET_INVEST_DETAIL]: (state, { payload }) => {
            return payload;
        },
    }, 
    initialState
);

export default investjournaldetailReducer;