import {Fragment} from "react";

import classes from "./Header.module.scss";
import logo from "../../../images/logo/icon-left-font.svg";

const Header = props =>{
    return (
        <Fragment>
            <header className={classes.header}>
                <div className={classes["header__logo-box"]}>
                    <img src={logo} alt="logo" className={classes["header__logo"]}/>
                </div>
                {props.children}
            </header>
        </Fragment>
    )
}
export default Header;