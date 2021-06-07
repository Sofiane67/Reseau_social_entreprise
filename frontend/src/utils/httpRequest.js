import useHttp from "../hooks/use-http";
import {setHeaders} from "../utils/setHeaders";

export const httpRequest = (url, method ,dataBody = null) => {
    
    const headers = setHeaders();
    return () => {
        const sendRequest = useHttp();
        
        const settings = {
            url,
            method,
            headers
        };

        if(dataBody){
            settings.body = dataBody;
        }

        return sendRequest(settings);
    }
}