import useHttp from "../../../hooks/use-http";
import {requestSettings} from "../../../utils/formFields";
import {FORM_IS_SENDED} from "./type";


export const signup = user => {
    return dispatch =>{
        const sendPostRequest = useHttp();
        const settings = requestSettings("http://localhost:3000/api/auth/signup", user);

        sendPostRequest(settings);
        dispatch({ type: FORM_IS_SENDED, isSend: false })
    }
}