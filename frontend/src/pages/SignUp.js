import {useState, useEffect} from "react";
import useHttp from "../hooks/use-http";
import Form from "../components/Form/Form";
import FormGroup from "../components/FormGroup/FormGroup";
import Button from "../components/UI/Button/Button";

import InputContext from "../store/inputValue-context";

import { formFieldsSignUp, getInputValue, onSubmitFormHelper, requestSettings} from "../utils/formFields";

const SignUp = () => {

    const [name, setName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");
    const [formIsSend, setFormIsSend] = useState(false);

    //Récupération des valeurs des inputs
    const onGetName = getInputValue(name, setName);
    const onGetFirstName = getInputValue(firstName, setFirstName);
    const onGetEmail = getInputValue(email, setEmail);
    const onGetPassword = getInputValue(password, setPassword);

    //Retourne un objet User qui sera envoyé dans la requête POST et un Booléen si le formulaire est envoyé ou non
    const onSubmitForm = onSubmitFormHelper(setUser, setFormIsSend);

    //Requête POST : Enregistrement d'un nouvel user
    const sendPostRequest = useHttp();
    useEffect(() => {
        if (formIsSend) {

            const settings = requestSettings("http://localhost:3000/api/auth/signup", user );

            sendPostRequest(settings);
            setFormIsSend(false);
        }
    }, [formIsSend, requestSettings])

    return (
        <InputContext.Provider value = {{
            name,
            firstName,
            email,
            password
        }} >
            <Form onSubmitForm={onSubmitForm}>
                <FormGroup field={formFieldsSignUp.name} onGetInputValue={onGetName} formIsSend={formIsSend}/>
                <FormGroup field={formFieldsSignUp.firstName} onGetInputValue={onGetFirstName} formIsSend={formIsSend}/>
                <FormGroup field={formFieldsSignUp.email} onGetInputValue={onGetEmail} formIsSend={formIsSend}/>
                <FormGroup field={formFieldsSignUp.password} onGetInputValue={onGetPassword} formIsSend={formIsSend}/>
                <Button type="submit">Valider</Button>
            </Form>
        </InputContext.Provider>
    );
};

export default SignUp;