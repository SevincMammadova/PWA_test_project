import { SET_POSTS } from "./actions";

export const initialState = {
    posts: [],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                posts: action.data,
            }
        default:
            return state;
    }
}