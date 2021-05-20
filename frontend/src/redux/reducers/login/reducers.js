import  {LOGIN, LOGOUT} from "../../actions/login/types";

const initialState = {
    isLoggedIn: false,
    token: null,
    userId: null,
};

export const login = (state= initialState, action) => {
    let newState;
    switch (action.type) {
        case LOGIN:
            newState = {
                ...state,
                isLoggedIn: action.value.isLoggedIn,
                token: action.value.token, 
                userId: action.value.userId
            }
            break;
        case LOGOUT:
            newState = {
                ...state,
                isLoggedIn: false,
                token: null,
                userId: null
            }
            break;
        default:
            return state;
    }

    return newState;
}