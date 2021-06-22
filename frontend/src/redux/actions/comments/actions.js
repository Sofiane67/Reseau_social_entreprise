import { httpRequest } from "../../../utils/httpRequest";
import { getAllPosts } from "../posts/actions";
import { FORM_IS_SENDED } from "../form/type";
import { ERROR } from "../form/type";
import { SHOW_MODAL } from "../modal/types";

export const addComment = (comment ,forumId, postId) => {
    return dispatch => {
        const response = httpRequest(`http://localhost:3000/api/comments/${forumId}/${postId}`, "POST", comment);
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

export const editComment = (comment, commentId) => {
    return dispatch => {
        console.log(comment, commentId)
        const response = httpRequest(`http://localhost:3000/api/comments/${commentId}`, "PUT", comment);
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