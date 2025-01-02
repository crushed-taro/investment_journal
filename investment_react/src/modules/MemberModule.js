import { createActions, handleActions } from "redux-actions";

const initialState = {};

export const POST_REGISTER = "member/POST_REGISTER";

const actions = createActions({
    [POST_REGISTER]: () => {},
});

const memberReducer = handleActions(
    {
        [POST_REGISTER]: (state, { payload }) => {
            return payload;
        },
    }, 
    initialState
);

export default memberReducer;