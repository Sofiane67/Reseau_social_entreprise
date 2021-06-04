import { Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LOGOUT } from "../../redux/actions/login/types";
import { logoutNav, loginNav } from "../../utils/navigation";
import LinkItem from "../UI/Link/LinkItem";
import classes from "./MainMenuLink.module.scss";

const MainNavigationLink = props => {
    const history = useHistory();
    const [menu, setMenu] = useState(logoutNav)
    const isLoggedIn = useSelector(state => state.login.isLoggedIn);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isLoggedIn) {
            setMenu(loginNav);
        } else {
            setMenu(logoutNav);
        }
    }, [isLoggedIn])


    const logoutHandler = () => {
        dispatch({ type: LOGOUT });
        history.push("/");
    }

    return (
        <Fragment>
            {
                menu.map(link => <li  className={classes.mainMenuLink} key={link.name}> <LinkItem clickEvent={logoutHandler} path={link.path}>{link.name}</LinkItem></li>)
            } 
        </Fragment>
    )

}

export default MainNavigationLink;