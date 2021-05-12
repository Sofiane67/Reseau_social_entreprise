import {NavLink} from "react-router-dom";
import classes from "./LinkNav.module.scss";

const LinkNav = props => {
    return <NavLink className={classes["navLink"]} activeClassName={classes["navLink--active"]} to={props.path}>{props.children}</NavLink>
}

export default LinkNav;