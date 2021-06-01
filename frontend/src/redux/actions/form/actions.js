import { httpRequest } from "../../../utils/httpRequest";
import {FORM_IS_SENDED, ERROR} from "./type";


export const signup = user => {
    return dispatch =>{
        const response = httpRequest("http://localhost:3000/api/auth/signup", user);
        response().then(data => {
            if(data.error){
                dispatch({ type: ERROR, message: data.error.errors[0].message })
            }
        });
        dispatch({ type: FORM_IS_SENDED, isSend: false })
    }
}
export const addPost = post => {

    return dispatch => {
        const response = httpRequest("http://localhost:3000/api/posts/1", post);
        response().then(data => {
            if (data.error) {
                dispatch({ type: ERROR, message: data.error.errors[0].message })
            }
        });
        dispatch({ type: FORM_IS_SENDED, isSend: false })
    }
}