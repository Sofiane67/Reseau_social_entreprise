import { Fragment } from "react";
import {NavLink} from "react-router-dom";

import classes from "./Navigation.module.scss";

const Navigation = () => {
    return (
        <Fragment>
            <nav className={classes.nav}>
                <ul className={classes["nav__list"]}>
                    <li className={classes["nav__item"]}>
                        <NavLink className={classes["nav__link"]} activeClassName={classes["nav__link--active"]} to="/signup">Inscription</NavLink>
                    </li>
                    <li className={classes["nav__item"]}>
                        <NavLink className={classes["nav__link"]} activeClassName={classes["nav__link--active"]} to="login">Connexion</NavLink>
                    </li>
                </ul>
            </nav>
        </Fragment>
    )
};

export default Navigation;