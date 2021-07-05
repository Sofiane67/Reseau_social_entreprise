import { httpRequest } from "../../../utils/httpRequest";
import { EDIT_USER, GET_USER_DATA } from "./types";
import {LOGOUT} from "../login/types";
import { SHOW_MODAL } from "../modal/types";
import { FORM_IS_SENDED } from "../form/type";
import { ERROR } from "../form/type";

export const getUserProfil = userId =>{
    return dispatch => {
        const response = httpRequest(`${process.env.REACT_APP_DOMAIN}/api/auth/${userId}`, "GET");
        response().then(res => {
            if(!res.status) throw res.error;
            const {data} = res;
            dispatch({
                type: GET_USER_DATA,
                value: data
            })
        })
        .catch(error => {
            if (error.name == "TokenExpiredError") {
                dispatch({ type: LOGOUT })
            }
        });
    }
}

export const deleteUser = userId => {
    return dispatch => {
        const response = httpRequest(`${process.env.REACT_APP_DOMAIN}/api/auth/${userId}`, "DELETE");
        response().then(res => {
            if (!res.status) throw res.error;
            dispatch({ type: LOGOUT})
            dispatch({ type: FORM_IS_SENDED, isSend: false });
            dispatch({ type: SHOW_MODAL, value: { isShow: false } });
        })
        .catch(error => {
            if (error.name == "TokenExpiredError") {
                dispatch({ type: LOGOUT })
            }
        });
    }
}

export const editUser = (user, userId) => {
    return dispatch => {
        const response = httpRequest(`${process.env.REACT_APP_DOMAIN}/api/auth/${userId}`, "PUT", user);
        response().then(res => {
            if (!res.status) throw res.error;
            dispatch({ type: EDIT_USER, value: res.data});
            if (res.error) {
                dispatch({ type: ERROR, message: res.error.errors[0].message })
            }
        })
        .catch(error => {
            if (error.name == "TokenExpiredError") {
                dispatch({ type: LOGOUT });
                dispatch({ type: SHOW_MODAL, value: { isShow: false } });
            }
        });

        dispatch({ type: FORM_IS_SENDED, isSend: false });
        dispatch({ type: SHOW_MODAL, value: { isShow: false } });
    }
}
