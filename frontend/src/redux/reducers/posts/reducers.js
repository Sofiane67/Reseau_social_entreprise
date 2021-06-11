import {GET_ALL_POST} from "../../actions/posts/types";

const initialState = []

export const posts = (state = initialState, action) => {

    let newState;
    switch (action.type) {
        case GET_ALL_POST:
            newState = [
                ...action.value,
            ]
            break;
        default:
            return state;
    }
    return newState;
}