import axios from "axios";

const useHttp = () => {

    const sendRequest = async requestConfig => {
        try {
            const res = await axios({
                method: requestConfig.method,
                url: requestConfig.url,
                headers: requestConfig.headers,
                data: requestConfig.body
            });
            
            return res;
            
        } catch (error) {
            return { error: error.response.data.error};
        }
    }

    return sendRequest;
}

export default useHttp;
