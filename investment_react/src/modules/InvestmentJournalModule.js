import { createActions, handleActions } from "redux-actions";

const initialState = {};

export const POST_INVEST_REGISTER = "investjournal/POST_INVEST_REGISTER";
export const GET_INVEST = "investjournal/GET_INVEST";

const actions = createActions({
    [POST_INVEST_REGISTER]: () => {},
    [GET_INVEST]: () => {},
});

const investjournalReducer = handleActions(
    {
        [POST_INVEST_REGISTER]: (state, { payload }) => {
            return payload;
        },
        [GET_INVEST]: (state, { payload }) => {
            return payload;
        },
    }, 
    initialState
);

export default investjournalReducer;