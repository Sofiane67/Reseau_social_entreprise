import {NavLink} from "react-router-dom";
import classes from "./LinkItem.module.scss";

const LinkItem = props => {
    return <NavLink onClick={props.clickEvent} className={classes["navLink"]} activeClassName={classes["navLink--active"]} to={props.path}>{props.children}</NavLink>
}

export default LinkItem;