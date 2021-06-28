import {httpRequest} from "../../../utils/httpRequest";
import { FORM_IS_SENDED } from "../form/type";
import { SHOW_MODAL } from "../modal/types";
import { ERROR } from "../form/type";
import {GET_ALL_POST} from "./types";

export const getAllPosts = (forumId = "") => {
    return dispatch => {
        const res = httpRequest(`http://localhost:3000/api/posts/${forumId}`, "GET");
        res().then(res => {
            const {data} = res;
            dispatch({
                type: GET_ALL_POST,
                value: data
            });
        });
        dispatch({ type: FORM_IS_SENDED, isSend: false });
    }
};

export const addPost = (post, forumId) => {
    return dispatch => {
        const response = httpRequest(`http://localhost:3000/api/posts/${forumId}`, "POST", post);
        response().then(data => {
            dispatch(getAllPosts());
            if (data.error) {
                dispatch({ type: ERROR, message: data.error.errors[0].message })
            }
        });
        dispatch({ type: FORM_IS_SENDED, isSend: false });
        dispatch({ type: SHOW_MODAL, value: { isShow: false } });
    }
}

export const editPost = (post,forumId, postId) => {
    return dispatch => {
        const response = httpRequest(`http://localhost:3000/api/posts/${forumId}/${postId}`, "PUT", post);
        response().then(data => {
            dispatch(getAllPosts());
            if (data.error) {
                dispatch({ type: ERROR, message: data.error.errors[0].message })
            }
        });
        dispatch({ type: FORM_IS_SENDED, isSend: false });
        dispatch({ type: SHOW_MODAL, value: { isShow: false } });
    }
};

export const deletePost = (forumId, postId) => {
    return dispatch => {
        const res = httpRequest(`http://localhost:3000/api/posts/${forumId}/${postId}`, "DELETE");
        res().then(res => {
            dispatch(getAllPosts());
            dispatch({type: SHOW_MODAL, value: {isShow: false}})
        })
    }
};