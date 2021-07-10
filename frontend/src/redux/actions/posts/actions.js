import {httpRequest} from "../../../utils/httpRequest";
import { FORM_IS_SENDED } from "../form/type";
import { SHOW_MODAL } from "../modal/types";
import { ERROR } from "../form/type";
import {GET_ALL_POST} from "./types";
import { LOGOUT } from "../login/types";

export const getAllPosts = (forumId = "") => {
    return dispatch => {
        const res = httpRequest(`${process.env.REACT_APP_DOMAIN}/api/posts/${forumId}`, "GET");
        res().then(res => {
            if(!res.status) throw res.error;

            const {data} = res;
            dispatch({
                type: GET_ALL_POST,
                value: data
            });
        })
        .catch(error => {
            if (error.name == "TokenExpiredError"){
                dispatch({type: LOGOUT})
            }
        });
        dispatch({ type: FORM_IS_SENDED, isSend: false });
    }
};

export const addPost = (post, forumId) => {
    return dispatch => {
        const response = httpRequest(`${process.env.REACT_APP_DOMAIN}/api/posts/${forumId}`, "POST", post);
        response().then(res => {
            if (!res.status) throw res.error;
            dispatch({ type: "SUCCESS", message: res.data.message, status: "success" })
            dispatch(getAllPosts(forumId));
        })
        .catch(error => {
            if (error.name == "TokenExpiredError") {
                dispatch({ type: LOGOUT })
            }else{
                dispatch({ type: "ERROR", message: error.errors[0].message, status:"error" })
            }
        });
        dispatch({ type: FORM_IS_SENDED, isSend: false });
        dispatch({ type: SHOW_MODAL, value: { isShow: false } });
    }
}

export const editPost = (post,forumId, postId) => {
    return dispatch => {
        const response = httpRequest(`${process.env.REACT_APP_DOMAIN}/api/posts/${forumId}/${postId}`, "PUT", post);
        response().then(res => {
            if (!res.status) throw res.error;
            dispatch({ type: "SUCCESS", message: res.data.message, status: "success" })
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
};

export const deletePost = (forumId, postId) => {
    return dispatch => {
        const res = httpRequest(`${process.env.REACT_APP_DOMAIN}/api/posts/${forumId}/${postId}`, "DELETE");
        res().then(res => {
            if (!res.status) throw res.error;
            dispatch({ type: "SUCCESS", message: res.data.message, status: "success" })
            dispatch(getAllPosts(forumId));
            dispatch({type: SHOW_MODAL, value: {isShow: false}})
        })
            .catch(error => {
                if (error.name == "TokenExpiredError") {
                    dispatch({ type: LOGOUT })
                }
            });
    }
};