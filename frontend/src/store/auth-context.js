import {createContext, useState} from "react";

const AuthContext = createContext({
    token: "",
    isLoggedIn : false,
});

export const AuthContextProvider = props => {
    
    const storedToken = JSON.parse(localStorage.getItem("token"));

    let initToken;
    let initUserId;
    if(storedToken){
        initToken = storedToken.token;
        initUserId = storedToken.userId;
    }
    const [token, setToken] = useState(initToken);
    const [userId, setUserId] = useState(initUserId);
    const isLoggedIn = !!token;

    const loginHandler = tokenData => {
        setUserId(tokenData.userId);
        setToken(tokenData.token);
        localStorage.setItem("token", JSON.stringify(tokenData));
    };

    const logoutHandler = () => {
        setToken(null)
        localStorage.removeItem("token");
    }

    const contextValue = {
        userId: userId,
        token: token,
        isLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;