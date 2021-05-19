import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import Form from "../components/Form/Form";
import FormGroup from "../components/FormGroup/FormGroup";
import Button from "../components/UI/Button/Button";
import { formFieldLogin} from "../utils/formFields";
import { GET_EMAIL, GET_PASSWORD } from "../redux/actions/form/type";
import {login} from "../redux/actions/login/actions";

const Login = () => {

    const loginState = useSelector(state => state.formInputValue);
    const formIsSended = useSelector(state => state.formInputValue.isSend);
    const dispatch = useDispatch();

    useEffect(() => {
        if (formIsSended) {
            const user = {
                email: loginState.email,
                password: loginState.password
            }
            dispatch(login(user));
        }
    }, [formIsSended, loginState, dispatch]);

    return (
        <Form>
            <FormGroup field={formFieldLogin.email} action={GET_EMAIL}/>
            <FormGroup field={formFieldLogin.password} action={GET_PASSWORD}/>
            <Button type="submit">Valider</Button>
        </Form>
    );
};

export default Login;