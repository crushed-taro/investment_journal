import { createActions, handleActions } from "redux-actions";

const initialState = {};

export const POST_REGISTER = "member/POST_REGISTER";
export const POST_FINDID = "member/POST_FINDID";

const actions = createActions({
    [POST_REGISTER]: () => {},
    [POST_FINDID]: () => {},
});

const memberReducer = handleActions(
    {
        [POST_REGISTER]: (state, { payload }) => {
            return payload;
        },
        [POST_FINDID]: (state, { payload }) => {
            return payload;
        },
    }, 
    initialState
);

export default memberReducer;