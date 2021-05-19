import { Fragment } from "react";
import {NavLink} from "react-router-dom";

import classes from "./Navigation.module.scss";


const Navigation = props => {
    return (
        <Fragment>
            <nav className={classes.nav}>
                <ul className={classes["nav__list"]}>
                    <li className={classes["nav__item"]}>
                        <NavLink to="/signup" >Inscription</NavLink>
                    </li>
                    <li className={classes["nav__item"]}>
                        <NavLink to="login" >Connexion</NavLink>
                    </li>
                </ul>
            </nav>
        </Fragment>
    )
};

export default Navigation;