import { httpRequest } from "../../../utils/httpRequest";
import { GET_USER_DATA } from "./types";
import {LOGOUT} from "../login/types";
import { SHOW_MODAL } from "../modal/types";
import { FORM_IS_SENDED } from "../form/type";

export const getUserProfil = userId =>{
    return dispatch => {
        const response = httpRequest(`http://localhost:3000/api/auth/${userId}`, "GET");
        response().then(user => {
            const {data} = user;
            dispatch({
                type: GET_USER_DATA,
                value: data
            })
        })
    }
}

export const deleteUser = userId => {
    return dispatch => {
        console.log("DELETE USER");
        const response = httpRequest(`http://localhost:3000/api/auth/${userId}`, "DELETE");
        response().then(() => {
            dispatch({ type: LOGOUT})
            dispatch({ type: FORM_IS_SENDED, isSend: false });
            dispatch({ type: SHOW_MODAL, value: { isShow: false } });
        })
    }
}