import {Switch, Route} from "react-router-dom";
import Wrapper from "./components/layout/Wrapper/Wrapper";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
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
            </Switch>
        </Wrapper>
    )
}

export default App;
