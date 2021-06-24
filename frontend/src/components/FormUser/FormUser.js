import Form from "../Form/Form";
import FormGroup from "../FormGroup/FormGroup";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import { useSelector, useDispatch} from "react-redux";
import {useEffect, useState,Fragment} from "react";
import { formFieldUser } from "../../utils/formFields";
import { GET_NAME, GET_FIRSTNAME, GET_EMAIL, GET_PASSWORD } from "../../redux/actions/form/type";
import { showModal } from "../../redux/actions/modal/actions";
import { signup } from "../../redux/actions/form/actions";

const FormUser =  props => {
    const dispatch = useDispatch();
    const user = useSelector(store => store.user)
    const isLoggedIn = useSelector(store => store.login.isLoggedIn);
    const userDataStrored = useSelector(state => state.formInputValue);
    const formIsSended = useSelector(state => state.formInputValue.isSend);
    const [userData, setUserData] = useState();

    const {request} = props;

    useEffect(() => {
        if (formIsSended) {
            if(request == "signup" && !isLoggedIn){
                dispatch(signup(userDataStrored))
            }
        }

    }, [request, formIsSended])

    const showDeleteModalHandler = e => {
        dispatch(showModal({
            isShow: true,
            nameButton: "Supprimer",
            type: "account",
            userId: user.id,
            sql: "delete",
            content: "Confirmez vous la suppression de votre compte ?"
        }))
    };

    return (
        <Fragment>
            {isLoggedIn && <h1>Mes informations</h1>}
            <Form>
                <FormGroup field={formFieldUser.name}>
                    {!isLoggedIn ? <Input field={formFieldUser.name} action={GET_NAME} /> : <p>{user.name}</p>}
                </FormGroup>
                <FormGroup field={formFieldUser.firstName} >
                    {!isLoggedIn ? <Input field={formFieldUser.firstName} action={GET_FIRSTNAME} /> : <p>{user.firstName}</p>}
                </FormGroup>
                <FormGroup field={formFieldUser.email}>
                    {!isLoggedIn ? <Input field={formFieldUser.email} action={GET_EMAIL} /> : <p>{user.email}</p>}
                </FormGroup>
                {
                    !isLoggedIn ? (
                    <FormGroup field={formFieldUser.password}>
                        <Input field={formFieldUser.password} action={GET_PASSWORD} />
                    </FormGroup>
                    ) : ""
                }
                
                {!isLoggedIn ? <Button type="submit">Valider</Button> : (
                    <div>
                        <Button >Modifier mon profil</Button>
                        <Button onClick={showDeleteModalHandler}>Supprimer mon compte</Button>
                    </div>
                    )}
            </Form>
        </Fragment>

    )
}

export default FormUser;