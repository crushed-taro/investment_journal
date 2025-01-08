import { createActions, handleActions } from "redux-actions";

const initialState = {};

export const POST_INVEST_REGISTER = "investjournal/POST_INVEST_REGISTER";

const actions = createActions({
    [POST_INVEST_REGISTER]: () => {},
});

const investjournalReducer = handleActions(
    {
        [POST_INVEST_REGISTER]: (state, { payload }) => {
            return payload;
        },
    }, 
    initialState
);

export default investjournalReducer;