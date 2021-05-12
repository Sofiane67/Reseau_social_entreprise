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
            if(!res.ok) throw new Error("La requête a échouée");

            const data = await res.json();
            return data;
            
        } catch (error) {
            console.log(error.message)
        }
    }

    return sendRequest;
}

export default useHttp;