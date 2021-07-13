import { httpRequest } from "../../../utils/httpRequest";
import {FORM_IS_SENDED, ERROR} from "./type";

export const signup = user => {
    return dispatch =>{
        user.roleId = 2;
        const response = httpRequest(`${process.env.REACT_APP_DOMAIN}/api/auth/signup`, "POST", user);
        response().then(data => {
            if(data.error){
                dispatch({ type: ERROR, message: data.error.errors[0].message, status:"error" })
            }else{
                dispatch({ type: "SUCCESS", message: data.data.message, status:"success" })
            }
        });
        dispatch({ type: FORM_IS_SENDED, isSend: false });
    }
}