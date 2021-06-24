import Form from "../Form/Form";
import FormGroup from "../FormGroup/FormGroup";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import { useSelector } from "react-redux";
import {useState, Fragment} from "react";
import { login } from "../../redux/reducers/login/reducer";
import { formFieldUser } from "../../utils/formFields";
import { GET_NAME, GET_FIRSTNAME, GET_EMAIL, GET_PASSWORD } from "../../redux/actions/form/type";

const FormUser =  () => {
    const user = useSelector(store => store.user)
    const isLoggedIn = useSelector(store => store.login.isLoggedIn);
    const userDataStrored = useSelector(state => state.formInputValue);
    const formIsSended = useSelector(state => state.formInputValue.isSend);
    
    console.log(user)
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
                        <Button>Modifier mon profil</Button>
                        <Button>Supprimer mon compte</Button>
                    </div>
                    )}
            </Form>
        </Fragment>

    )
}

export default FormUser;