import { Fragment } from "react";
import LinkNav from "../../UI/Link/LinkNav";

import classes from "./Navigation.module.scss";


const Navigation = props => {
    return (
        <Fragment>
            <nav className={classes.nav}>
                <ul className={classes["nav__list"]}>
                    {
                        props.path.map(link => {
                            return (
                                <li key={link.name} className={classes["nav__item"]}>
                                    <LinkNav path={link.path} >{link.name}</LinkNav>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </Fragment>
    )
};

export default Navigation;