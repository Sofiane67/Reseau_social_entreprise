import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import Form from "../components/Form/Form";
import FormGroup from "../components/FormGroup/FormGroup";
import Input from "../components/UI/Input/Input";
import Button from "../components/UI/Button/Button";

import { formFieldUser} from "../utils/formFields";
import { GET_NAME, GET_FIRSTNAME, GET_EMAIL, GET_PASSWORD} from "../redux/actions/form/type";
import {signup} from "../redux/actions/form/actions";

const SignUp = () => {

    const dispatch = useDispatch();
    const userDataStrored = useSelector(state => state.formInputValue);
    const formIsSended = useSelector(state => state.formInputValue.isSend);
    const errorSignup = useSelector(state => state.formInputValue.error);

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
            <FormGroup field={formFieldUser.name}>
                <Input field={formFieldUser.name} action={GET_NAME} />
            </FormGroup>
            <FormGroup field={formFieldUser.firstName} >
                <Input field={formFieldUser.firstName} action={GET_FIRSTNAME} />
            </FormGroup>
            <FormGroup field={formFieldUser.email}>
                <Input field={formFieldUser.email} action={GET_EMAIL} />
            </FormGroup>
            <FormGroup field={formFieldUser.password}>
                <Input field={formFieldUser.password} action={GET_PASSWORD} />
            </FormGroup>
            <Button type="submit">Valider</Button>
            <p>{errorSignup && errorSignup}</p>
        </Form>
    );
};

export default SignUp;