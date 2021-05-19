import { httpRequest } from "../../../utils/httpRequest";
import {FORM_IS_SENDED} from "./type";


export const signup = user => {
    return dispatch =>{
        const response = httpRequest("http://localhost:3000/api/auth/signup", user);
        response().then(data => console.log(data))
        dispatch({ type: FORM_IS_SENDED, isSend: false })
    }
}