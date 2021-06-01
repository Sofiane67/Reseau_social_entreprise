import useHttp from "../hooks/use-http";
import {setHeaders} from "../utils/setHeaders";

export const httpRequest = (url, dataBody = null) => {
    const headers = setHeaders();
    return () => {
        const sendRequest = useHttp();
        
        let settings;

        if(dataBody){
            settings = {
                url,
                method: "POST",
                headers: headers,
                body: dataBody
            }
        }else{
            settings = {url};
        }
        return sendRequest(settings);
    }
}