const useHttp = () => {

    const sendRequest = async requestConfig => {
        try {
            const res = await fetch(
                requestConfig.url, {
                    method: requestConfig.method,
                    headers: requestConfig.headers,
                    body: requestConfig.body
                }
            );
            const data = await res.json();
            let errorMessage;
            // if (data.error.errors){
            //     errorMessage = data.error.errors[0].message
            // }else{
            //     errorMessage = data.error
            // }
            // if (errorMessage) throw new Error(errorMessage);
            
            return data;
            
        } catch (error) {
            return {error: error.message};
        }
    }

    return sendRequest;
}

export default useHttp;

//soso@gmail.com