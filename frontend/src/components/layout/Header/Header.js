import {Fragment, useEffect} from "react";
import {useSelector} from "react-redux";
import Wrapper from "../Wrapper/Wrapper";
import classes from "./Header.module.scss";
import logo from "../../../images/logo/icon-left-font.svg";

const Header = props =>{
    const isLoggedIn = useSelector(store => store.login.isLoggedIn);

    useEffect(()=>{
        if (isLoggedIn) {
            document.querySelector("#root").classList.add("bg-gray");
        }
        if (!isLoggedIn) {
            document.querySelector("#root").classList.remove("bg-gray");
        }
    },[isLoggedIn]);

    return (
        <Fragment>
            <header className={`${classes.header} ${isLoggedIn && classes["header--bg-white"]}`}>
                <Wrapper className="wrapper__header">
                    <div className={classes["header__logo-box"]}>
                        <img src={logo} alt="logo" className={classes["header__logo"]} />
                    </div>
                    {props.children}
                </Wrapper>
            </header>
        </Fragment>
    )
}
export default Header;