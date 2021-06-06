import { Fragment} from "react";

import classes from "./Navigation.module.scss";

const Navigation = props => {
    const columnList = props.columnList;
    return (
        <Fragment>
            <nav className={classes.nav}>
                <ul className={`${classes["nav__list"]} ${columnList ? classes[columnList] : ""}`}>
                    {props.children}
                </ul>
            </nav>
        </Fragment>
    )
};

export default Navigation;