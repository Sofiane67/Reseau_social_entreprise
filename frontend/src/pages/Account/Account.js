import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../../components/Form/Form";
import AsideMenu from "../../components/AsideMenu/AsideMenu";
import FormUser from "../../components/FormUser/FormUser";
import Button from "../../components/UI/Button/Button";
import classes from "./Account.module.scss";
import {showModal} from "../../redux/actions/modal/actions";
import { editUser } from "../../redux/actions/user/actions";

const Account = () => {
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const formIsSend = useSelector(store => store.formInputValue.isSend);
    const userDataStrored = useSelector(store => store.formInputValue);
    const error = useSelector(store => store.formInputValue.error);
    const [update, setUpdate] = useState(false);

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
    
    return (
        <Fragment>
            <AsideMenu className="card__home--aside-menu"/>
            <div className={classes.account}>
                <h1>Mes informations</h1>
                <Form>
                    <FormUser user={user} edit={update}/>
                    {error && <p>L'adresse email est déjà uilisée</p>}
                    {update && <Button type="submit">Valider</Button>}
                </Form>
                <div>
                    {!update && (
                        <Fragment>
                            <Button onClick={showFieldsFormToUpdateHandler}>Modifier mon profil</Button>
                            <Button onClick={showDeleteModalHandler}>Supprimer mon compte</Button>
                        </Fragment>
                    )
                    }
                </div>
            </div>
            
        </Fragment>
    )
}

export default Account;