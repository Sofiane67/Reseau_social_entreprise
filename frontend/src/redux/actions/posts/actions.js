import {httpRequest} from "../../../utils/httpRequest";
import { FORM_IS_SENDED, ERROR } from "../form/type";
import {GET_ALL_POST} from "./types";


export const getAllPosts = () => {
    return dispatch => {
        const res = httpRequest("http://localhost:3000/api/posts", "GET");
        res().then(res => {
            const {data} = res;
            dispatch({
                type: GET_ALL_POST,
                value: data
            });
        });
        dispatch({ type: FORM_IS_SENDED, isSend: false });
    }
}

export const deletePost = (forumId, postId) => {
    console.log("DELETE POST")
    return dispatch => {
        const res = httpRequest(`http://localhost:3000/api/posts/${forumId}/${postId}`, "DELETE");
        res().then(res => {
            dispatch(getAllPosts());
        })
    }
}