import { DESTROY_SESSION, GET_USER_DATA, EDIT_USER} from "../../actions/user/types";

const initialState = []

export const user = (state = initialState, action) => {

    let newState;
    switch (action.type) {
        case GET_USER_DATA:
            newState = action.value
            break;
        case DESTROY_SESSION:
            newState = action.value
            break;
        case EDIT_USER:
            newState = {
                ...state,
                ...action.value
            }
            break;
        default:
            return state;
    }
    return newState;
}