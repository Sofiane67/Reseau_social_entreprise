import {SHOW_MODAL, DELETE_POST} from "../../actions/modal/types";

export const showModal = (modalValue) => {
    return dispatch => {
        dispatch({
            type: SHOW_MODAL,
            value: {...modalValue}
        })
    }
}