import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../../components/Form/Form";
import AsideMenu from "../../components/AsideMenu/AsideMenu";
import FormUser from "../../components/FormUser/FormUser";
import Button from "../../components/UI/Button/Button";
import classes from "./Account.module.scss";
import {showModal} from "../../redux/actions/modal/actions";
import { editUser } from "../../redux/actions/user/actions";
import FeedBack from "../../components/FeedBack/FeedBack";

const Account = () => {
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const formIsSend = useSelector(store => store.formInputValue.isSend);
    const userDataStrored = useSelector(store => store.formInputValue);
    const [update, setUpdate] = useState(false);
    const feedBack = useSelector(store => store.feedBack);

    useEffect(() => {
        if (formIsSend) {
            const data = {};
            for (const value in userDataStrored) {
                if (userDataStrored[value] != "" && typeof userDataStrored[value] == "string" && (userDataStrored[value] != user[value] || value == "password")) {
                    data[value] = userDataStrored[value];
                }
            }
            dispatch(editUser(data, user.id));
            setUpdate(false);
        }

    }, [formIsSend, userDataStrored, dispatch])

    const showDeleteModalHandler = () => {
        dispatch(showModal({
            isShow: true,
            nameButton: "Supprimer",
            type: "account",
            userId: user.id,
            sql: "delete",
            content: "Confirmez-vous la suppression de votre compte ?"
        }));
    }

    const showFieldsFormToUpdateHandler = () =>  setUpdate(true);
    const hideForm = () => setUpdate(false);
    
    return (
        <Fragment>
            <AsideMenu className="card__home--aside-menu"/>
            <div className={classes.account}>
                <h1>Mes informations</h1>
                <Form className="form__account">
                    <FormUser user={user} edit={update}/>
                    {update && (
                        <div className={classes["account__form-btn-box"]}>
                            <Button type="submit">Valider</Button>
                            <span className={classes["account__cancel-btn"]} onClick={hideForm}>Annuler</span>
                        </div>
                    )}
                </Form>
                <div>
                    {!update && (
                        <div className={classes["account__button-box"]}>
                            <Button onClick={showFieldsFormToUpdateHandler}>Modifier mon profil</Button>
                            <Button onClick={showDeleteModalHandler}>Supprimer mon compte</Button>
                        </div>
                    )
                    }
                </div>
            </div>
            {
                feedBack.message && <FeedBack message={feedBack.message} status={feedBack.status}/>
            }
        </Fragment>
    )
}

export default Account;