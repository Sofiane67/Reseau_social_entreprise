import {Switch, Route, Redirect} from "react-router-dom";
import {GuardedRoute, GuardProvider} from "react-router-guards"
import {requireLogin} from "./guards/required-login";
import Grid from "./components/layout/Grid/Grid";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home/Home";
import Account from "./pages/Account/Account";
import Header from "./components/layout/Header/Header";
import Navigation from "./components/layout/Navigation/Navigation";
import MainNavigationLink from "./components/MainMenuLink/MainMenuLink";
import Modal from "./components/Modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import { getUserProfil } from "./redux/actions/user/actions";


const App = () => {
    const dispatch = useDispatch();
    const modalIsShow = useSelector(store => store.modal.isShow);
    const login = useSelector(store => store.login);
    const {isLoggedIn, userId} = login;

    if(isLoggedIn){
        dispatch(getUserProfil(userId));
    }

    return (
        <Grid>
            {modalIsShow && <Modal/>}
            <Header>
                <Navigation>
                    <MainNavigationLink/>
                </Navigation>
            </Header>
            <GuardProvider>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/signup">
                        <SignUp />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/account">
                        <Account/>
                    </Route>
                    <Route path="/logout">
                        <Redirect to="/" />
                    </Route>
                    <GuardedRoute path="/" component={Home} guards={[requireLogin]} meta={{auth:true}}/>
                    <GuardedRoute path="/login" exact component={Login} guards={[requireLogin]} meta={{ auth: false }} />
                    
                </Switch>
            </GuardProvider>
        </Grid>
    )
}

export default App;
