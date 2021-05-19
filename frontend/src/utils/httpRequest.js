import useHttp from "../hooks/use-http";

export const httpRequest = (url, userData = null) => {
    return () => {
        const sendRequest = useHttp();
        
        let settings;

        if(userData){
            settings = {
                url,
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            }
        }else{
            settings = {url};
        }
        return sendRequest(settings);
    }
}