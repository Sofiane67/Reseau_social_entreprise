import {Switch, Route} from "react-router-dom";
import {GuardedRoute, GuardProvider} from "react-router-guards"
import {requireLogin} from "./guards/required-login";
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
            <GuardProvider>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/signup">
                        <SignUp />
                    </Route>
                    <GuardedRoute path="/" component={Home} guards={[requireLogin]} meta={{auth:true}}/>
                    <GuardedRoute path="/" component={Login} guards={[requireLogin]} meta={{ auth: false }} />
                </Switch>
            </GuardProvider>
        </Wrapper>
    )
}

export default App;
