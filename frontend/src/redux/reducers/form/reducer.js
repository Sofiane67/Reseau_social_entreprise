import { GET_NAME, GET_FIRSTNAME, GET_EMAIL, GET_PASSWORD, GET_POST_TEXT, GET_POST_IMAGE, FORM_IS_SENDED, ERROR, INIT_FORM} from "../../actions/form/type";

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
        case GET_POST_TEXT:
            newState = {
                ...state,
                text: action.value,
            }
            break;
        case GET_POST_IMAGE:

            const imageUrl = action.value instanceof FileList ? action.value[0] : action.value;
            
            newState = {
                ...state,
                imageUrl: imageUrl,
            }
            break;
        case FORM_IS_SENDED:
            newState = {
                ...state,
                isSend: action.isSend,
            }
            break;
        case ERROR:
            newState = {
                error: action.message
            }
            break;
        case INIT_FORM:
            delete state.error;
            newState = {
                ...state
            }
            break;
        default:
            return state;
    }
    return newState;
}