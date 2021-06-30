import {GET_ALL_GIFS} from "../../actions/tenor/types";
const initialState = []
export const tenor = (state = initialState, action) => {

    let newState;
    switch (action.type) {
        case GET_ALL_GIFS:
            newState = [...action.value]
            break;
        default:
            return state;
    }
    console.log(newState)
    return newState;
};