import {useState, useEffect} from "react";
import useHttp from "../hooks/use-http";
import Form from "../components/Form/Form";
import FormGroup from "../components/FormGroup/FormGroup";
import Button from "../components/UI/Button/Button";

import InputContext from "../store/inputValue-context";

import { formFieldsSignUp} from "../utils/formFields";

const SignUp = () => {

    const [name, setName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");
    const [formIsSend, setFormIsSend] = useState(false);

    /**
     * Retourne la valeur du champ name
     * @param {String} name 
     * @returns 
     */
    const onGetName = name => setName(name);
    
    /**
     * Retourne la valeur du champ firstName
     * @param {*} firstname 
     * @returns 
     */
    const onGetFirstName = firstname => setFirstName(firstname);

    /**
     * Retourne la valeur du champ email
     * @param {*} email 
     * @returns 
     */
    const onGetEmail = email => setEmail(email);

    /**
     * Retourne la valeur du champ password
     * @param {*} password 
     * @returns 
     */
    const onGetPassword = password => setPassword(password);

    /**
     * Cette fonction retourne un objet User pour l'envoi de la requête POST
     * @param {Object} user Contient les données du formulaire sous forme d'objet
     * @param {Boolean} isSend Retroune True lorsque que le formulaire est soumis
     */
    const onSubmitForm = (user, isSend) =>  {
        setUser(user);
        setFormIsSend(isSend);
    }

    //Requête POST : Enregistrement d'un nouvel user
    const sendPostRequest = useHttp();
    useEffect(() => {
        if (formIsSend) {
            const initReq = {
                url: "http://localhost:3000/api/auth/signup",
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            }
            sendPostRequest(initReq);
            setFormIsSend(false);
        }
    },[formIsSend])

    return (
        <InputContext.Provider value = {{value: {
            name,
            firstName,
            email,
            password
        }}} >
            <Form onSubmitForm={onSubmitForm}>
                <FormGroup field={formFieldsSignUp.name} key={formFieldsSignUp.name.id} onGetInputValue={onGetName} formIsSend={formIsSend}/>
                <FormGroup field={formFieldsSignUp.firstName} key={formFieldsSignUp.firstName.id} onGetInputValue={onGetFirstName} formIsSend={formIsSend}/>
                <FormGroup field={formFieldsSignUp.email} key={formFieldsSignUp.email.id} onGetInputValue={onGetEmail} formIsSend={formIsSend}/>
                <FormGroup field={formFieldsSignUp.password} key={formFieldsSignUp.password.id} onGetInputValue={onGetPassword} formIsSend={formIsSend}/>
                <Button>Valider</Button>
            </Form>
        </InputContext.Provider>
    );
};

export default SignUp;