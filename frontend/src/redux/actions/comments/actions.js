import { httpRequest } from "../../../utils/httpRequest";
import { getAllPosts } from "../posts/actions";
import { FORM_IS_SENDED } from "../form/type";
import { ERROR } from "../form/type";
import { SHOW_MODAL } from "../modal/types";
import { LOGOUT } from "../login/types";

export const addComment = (comment,postId, forumId) => {
    return dispatch => {
        const response = httpRequest(`${process.env.REACT_APP_DOMAIN}/api/comments/${postId}`, "POST", comment);
        response().then(res => {
            if(!res.status) throw res.error;
            dispatch({ type: "SUCCESS", message: res.data.message, status: "success" })
            dispatch(getAllPosts(forumId));
            if (res.error) {
                dispatch({ type: ERROR, message: res.error.errors[0].message })
            }
        })
        .catch(error => {
            if (error.name == "TokenExpiredError") {
                dispatch({ type: LOGOUT })
            }else{
                dispatch({ type: ERROR, message: error.errors[0].message, status:"error" })
            }
        });
        dispatch({ type: FORM_IS_SENDED, isSend: false });
        dispatch({ type: SHOW_MODAL, value: { isShow: false } });
    }
}

export const editComment = (comment, commentId, forumId) => {
    return dispatch => {
        const response = httpRequest(`${process.env.REACT_APP_DOMAIN}/api/comments/${commentId}`, "PUT", comment);
        response().then(res => {
            if (!res.status) throw res.error;
            dispatch({ type: "SUCCESS", message: res.data.message, status: "success" });
            dispatch(getAllPosts(forumId));
            
            if (res.error) {
                dispatch({ type: ERROR, message: res.error.errors[0].message })
            }
        })
        .catch(error => {
            if (error.name == "TokenExpiredError") {
                dispatch({ type: LOGOUT })
            }
        });
        dispatch({ type: FORM_IS_SENDED, isSend: false });
        dispatch({ type: SHOW_MODAL, value: { isShow: false } });
    }
}

export const deleteComment = (commentId, forumId) => {
    return dispatch => {
        const res = httpRequest(`${process.env.REACT_APP_DOMAIN}/api/comments/${commentId}`, "DELETE");
        res().then(res => {
            if (!res.status) throw res.error;
            dispatch({ type: "SUCCESS", message: res.data.message, status: "success" })
            dispatch(getAllPosts(forumId));
            dispatch({ type: SHOW_MODAL, value: { isShow: false } })
        })
        .catch(error => {
            if (error.name == "TokenExpiredError") {
                dispatch({ type: LOGOUT })
            }
        });
    }
};