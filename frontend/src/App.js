import { useContext, useState, useEffect} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Wrapper from "./components/layout/Wrapper/Wrapper";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Header from "./components/layout/Header/Header";
import Navigation from "./components/layout/Navigation/Navigation";
import AuthContext from "./store/auth-context";
import {logoutNav, loginNav} from "./utils/navigation";


const App = () => {

    const authCtx = useContext(AuthContext);
    const [path, setPath] = useState(logoutNav);

    useEffect(() => {
        if(authCtx.isLoggedIn){
            setPath(loginNav);
        };

        if (!authCtx.isLoggedIn) {
            setPath(logoutNav);
        };

    }, [authCtx]);

    return (
        <Wrapper>
            <Header>
                <Navigation path={path} clickEvent={path === loginNav? authCtx.logout:null}/>
            </Header>
            <Switch>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/signup">
                    <SignUp/>
                </Route>
                <Route path="/home">
                    {authCtx.isLoggedIn && <Home/>}
                    {!authCtx.isLoggedIn && <Redirect to="/"/>}
                </Route>
                <Route path="/">
                    {authCtx.isLoggedIn && <Redirect to="/home" />}
                    {!authCtx.isLoggedIn && <Redirect to="/login" />}
                </Route>
            </Switch>
        </Wrapper>
    )
}

export default App;
