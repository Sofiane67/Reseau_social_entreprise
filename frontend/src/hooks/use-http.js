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
            
            if (data.error.errors[0].message === "users.email must be unique") {
                return { errorMessage: "Cette adresse email est déja utilisée" };
            }

            if(data.error) throw new Error(data.error);
            
            
            return data;
            
        } catch (error) {
            return {error: error.message};
        }
    }

    return sendRequest;
}

export default useHttp;