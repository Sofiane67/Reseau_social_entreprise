import {NavLink} from "react-router-dom";
import classes from "./LinkItem.module.scss";

const LinkItem = props => {
    const eventHandler = props.clickEvent ? props.clickEvent: ()=>{}
    return <NavLink onClick={eventHandler} className={classes["navLink"]} activeClassName={classes["navLink--active"]} to={props.path}>{props.children}</NavLink>
}

export default LinkItem;