import {httpRequest} from "../../../utils/httpRequest";

import {LOGIN} from "./types";
import { FORM_IS_SENDED } from "../form/type";

export const login = userDataConnect => {
    return dispatch => {
        const response = httpRequest("http://localhost:3000/api/auth/login", userDataConnect);

        response().then(data =>{
            dispatch({
                type: LOGIN, value: {
                    isLoggedIn: true,
                    token: data.token,
                    userId: data.userId
                }
            });
            dispatch({ type: FORM_IS_SENDED, isSend: false })
        })
        
    }
}