import { DESTROY_SESSION, GET_USER_DATA } from "../../actions/user/types";

const initialState = []

export const user = (state = initialState, action) => {

    let newState;
    switch (action.type) {
        case GET_USER_DATA:
            newState = action.value
            break;
        case DESTROY_SESSION:
            console.log(action)
            newState = action.value
            break;
        default:
            return state;
    }
    return newState;
}