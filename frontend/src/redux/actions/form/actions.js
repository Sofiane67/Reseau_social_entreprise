import { httpRequest } from "../../../utils/httpRequest";
import {FORM_IS_SENDED, ERROR} from "./type";


export const signup = user => {
    return dispatch =>{
        const response = httpRequest("http://localhost:3000/api/auth/signup", user);
        response().then(data => {
            if(data.errorMessage){
                dispatch({ type: ERROR, message: data.errorMessage })
            }
        })
        dispatch({ type: FORM_IS_SENDED, isSend: false })
    }
}