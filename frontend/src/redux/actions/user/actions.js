import { httpRequest } from "../../../utils/httpRequest";
import { EDIT_USER, GET_USER_DATA } from "./types";
import {LOGOUT} from "../login/types";
import { SHOW_MODAL } from "../modal/types";
import { FORM_IS_SENDED } from "../form/type";
import { ERROR } from "../form/type";

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
        const response = httpRequest(`http://localhost:3000/api/auth/${userId}`, "DELETE");
        response().then(() => {
            dispatch({ type: LOGOUT})
            dispatch({ type: FORM_IS_SENDED, isSend: false });
            dispatch({ type: SHOW_MODAL, value: { isShow: false } });
        })
    }
}

export const editUser = (user, userId) => {
    return dispatch => {
        const response = httpRequest(`http://localhost:3000/api/auth/${userId}`, "PUT", user);
        response().then(data => {
            dispatch({ type: EDIT_USER, value: data.data});
            if (data.error) {
                dispatch({ type: ERROR, message: data.error.errors[0].message })
            }
        });

        dispatch({ type: FORM_IS_SENDED, isSend: false });
        dispatch({ type: SHOW_MODAL, value: { isShow: false } });
    }
}
