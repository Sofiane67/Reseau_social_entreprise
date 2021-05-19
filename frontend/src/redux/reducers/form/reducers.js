import { GET_NAME, GET_FIRSTNAME, GET_EMAIL, GET_PASSWORD, FORM_IS_SENDED} from "../../actions/form/type";

const initialState = {};

export const formInputValue = (state = initialState, action) => {
    
    let newState;
    switch (action.type) {
        case GET_NAME:
            newState = {
                ...state,
                name: action.value,
            }
            break;
        case GET_FIRSTNAME:
            newState = {
                ...state,
                firstName: action.value,
            }
            break;
        case GET_EMAIL:
            newState = {
                ...state,
                email: action.value,
            }
            break;
        case GET_PASSWORD:
            newState = {
                ...state,
                password: action.value,
            }
            break;
        case FORM_IS_SENDED:
            newState = {
                ...state,
                isSend: action.isSend,
            }
            break;
        default:
            return state;
    }
    return newState;
}