import { Fragment } from "react";
import AsideMenu from "../../components/AsideMenu/AsideMenu";
import FormUser from "../../components/FormUser/FormUser";
import classes from "./Account.module.scss";
const Account = () => {
    return (
        <Fragment>
            <AsideMenu className="card__home--aside-menu"/>
            <div className={classes.account}>
                <FormUser/>
            </div>
        </Fragment>
    )
}

export default Account;