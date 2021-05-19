import {Switch, Route, Redirect} from "react-router-dom";
import Wrapper from "./components/layout/Wrapper/Wrapper";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Header from "./components/layout/Header/Header";
import Navigation from "./components/layout/Navigation/Navigation";


const App = () => {


    return (
        <Wrapper>
            <Header>
                <Navigation/>
            </Header>
            <Switch>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/signup">
                    <SignUp/>
                </Route>
                <Route path="/home">
                    <Home/>
                </Route>
                <Route path="/">
                    <Redirect to="/login" />
                </Route>
            </Switch>
        </Wrapper>
    )
}

export default App;
