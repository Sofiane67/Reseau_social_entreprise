import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import Form from "../components/Form/Form";
import FormGroup from "../components/FormGroup/FormGroup";
import Button from "../components/UI/Button/Button";

import { formFieldsSignUp} from "../utils/formFields";
import { GET_NAME, GET_FIRSTNAME, GET_EMAIL, GET_PASSWORD} from "../redux/actions/form/type";
import {signup} from "../redux/actions/form/actions";

const SignUp = () => {

    const dispatch = useDispatch();
    const userDataStrored = useSelector(state => state.formInputValue);
    const formIsSended = useSelector(state => state.formInputValue.isSend);

    useEffect(() => {
        if (formIsSended) {
            const user = {
                name: userDataStrored.name,
                firstName: userDataStrored.firstName,
                email: userDataStrored.email,
                password: userDataStrored.password
            }
            dispatch(signup(user));
        }
    }, [formIsSended, userDataStrored, dispatch])
    
    return (
        <Form>
            <FormGroup field={formFieldsSignUp.name} action={GET_NAME}/>
            <FormGroup field={formFieldsSignUp.firstName} action={GET_FIRSTNAME}/>
            <FormGroup field={formFieldsSignUp.email} action={GET_EMAIL}/>
            <FormGroup field={formFieldsSignUp.password} action={GET_PASSWORD}/>
            <Button type="submit">Valider</Button>
        </Form>
    );
};

export default SignUp;