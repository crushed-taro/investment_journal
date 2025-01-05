import { createActions, handleActions } from "redux-actions";

const initialState = {};

export const POST_LOGIN = "member/POST_LOGIN";
export const POST_REGISTER = "member/POST_REGISTER";
export const POST_FINDID = "member/POST_FINDID";
export const POST_FINDPASSWORD = "member/POST_FINDPASSWORD";
export const PUT_CHANGPASSWORD = "member/PUT_CHANGPASSWORD";

const actions = createActions({
    [POST_LOGIN]: () => {},
    [POST_REGISTER]: () => {},
    [POST_FINDID]: () => {},
    [POST_FINDPASSWORD]: () => {},
    [PUT_CHANGPASSWORD]: () => {},
});

const memberReducer = handleActions(
    {
        [POST_LOGIN]: (state, { payload }) => {
            return payload;
        },
        [POST_REGISTER]: (state, { payload }) => {
            return payload;
        },
        [POST_FINDID]: (state, { payload }) => {
            return payload;
        },
        [POST_FINDPASSWORD]: (state, { payload }) => {
            return payload;
        },
        [PUT_CHANGPASSWORD]: (state, { payload }) => {
            return payload;
        },
    }, 
    initialState
);

export default memberReducer;