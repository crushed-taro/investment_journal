
import { createActions, handleActions } from "redux-actions";

const initialState = {};

export const POST_INVEST_DETAIL_REGISTER = "investjournaldetail/POST_INVEST_DETAIL_REGISTER";

const actions = createActions({
    [POST_INVEST_DETAIL_REGISTER]: () => {},
});

const investjournaldetailReducer = handleActions(
    {
        [POST_INVEST_DETAIL_REGISTER]: (state, { payload }) => {
            return payload;
        },
    }, 
    initialState
);

export default investjournaldetailReducer;