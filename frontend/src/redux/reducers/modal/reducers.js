import {SHOW_MODAL, DELETE_POST} from "../../actions/modal/types";
const initialState = {};
export const modal = (state = initialState, action) => {
    let newState; 
    switch (action.type) {
        case SHOW_MODAL:
            newState = {
                ...state,
                ...action.value
            }
            break;
        case DELETE_POST:
            console.log(action.value);
            newState = {
                ...action.value
            }
            break;
    
        default:
            return state;
    }
    return newState;
};