import { Fragment} from "react";

import classes from "./Navigation.module.scss";

const Navigation = props => {

    return (
        <Fragment>
            <nav className={classes.nav}>
                <ul className={classes["nav__list"]}>
                    {props.children}
                </ul>
            </nav>
        </Fragment>
    )
};

export default Navigation;