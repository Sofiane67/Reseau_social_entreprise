import {httpRequest} from "../../../utils/httpRequest";
import {LOGIN} from "./types";
import {ERROR} from "../form/type";
import { FORM_IS_SENDED } from "../form/type";

export const login = userDataConnect => {
    return dispatch => {
        const response = httpRequest("http://localhost:3000/api/auth/login", "POST", userDataConnect);
        
        response().then(data =>{
           
            if(data.error) {
                throw new Error(data.error)
            }

            const {userId, token} = data.data;
            dispatch({
                type: LOGIN, value: {
                    isLoggedIn: !!token,
                    token,
                    userId
                }
            });
        }).catch(error => {
            dispatch({type: ERROR, message: error.message})
        });
        dispatch({ type: FORM_IS_SENDED, isSend: false });
    }
}