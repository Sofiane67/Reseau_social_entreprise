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
import Multimedia from "./pages/Multimedia/Multimedia";
import Text from "./pages/Text/Text";
import { SHOW_MODAL } from "./redux/actions/modal/types";

const App = () => {
    const dispatch = useDispatch();
    const modalIsShow = useSelector(store => store.modal.isShow);
    const login = useSelector(store => store.login);
    const {isLoggedIn, userId} = login;

    if(isLoggedIn){
        dispatch(getUserProfil(userId));
    }

    if(!isLoggedIn){
        dispatch({ type: SHOW_MODAL, value: { isShow: false } });
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
                    <Route path="/logout">
                        <Redirect to="/" />
                    </Route>
                    {
                        !isLoggedIn && <GuardedRoute path="/" exact component={Login}/>
                    }
                    <GuardedRoute path="/login" exact component={Login}/>
                    <GuardedRoute path="/signup" exact component={SignUp}/>
                    <GuardedRoute path="/home" exact component={Login} guards={[requireLogin]} meta={{ auth: false }} />
                    <GuardedRoute path="/multimedia" exact component={Multimedia} guards={[requireLogin]} meta={{ auth: true }} />
                    <GuardedRoute path="/text" exact component={Text} guards={[requireLogin]} meta={{ auth: true }} />
                    <GuardedRoute path="/account" exact component={Account} guards={[requireLogin]} meta={{ auth: true }} />
                    <GuardedRoute path="/account" exact component={SignUp} guards={[requireLogin]} meta={{ auth: false }} />
                    <GuardedRoute path="/" exact component={Home} guards={[requireLogin]} meta={{ auth: true }} />
                    <GuardedRoute path="/" exact component={Login} guards={[requireLogin]} meta={{ auth: false }}/>
                </Switch>
            </GuardProvider>
        </Grid>
    )
}

export default App;
