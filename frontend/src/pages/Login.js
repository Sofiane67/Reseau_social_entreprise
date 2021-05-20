import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import Form from "../components/Form/Form";
import FormGroup from "../components/FormGroup/FormGroup";
import Button from "../components/UI/Button/Button";
import { formFieldLogin} from "../utils/formFields";
import { GET_EMAIL, GET_PASSWORD } from "../redux/actions/form/type";
import {login} from "../redux/actions/login/actions";


const Login = () => {
    const history = useHistory();
    const loginState = useSelector(state => state.formInputValue);
    const formIsSended = useSelector(state => state.formInputValue.isSend);
    const isLoggedIn = useSelector(state => state.login.isLoggedIn);
    const errorLogin = useSelector(state => state.formInputValue.error);
    
    const dispatch = useDispatch();

    useEffect(() => {
        if (formIsSended) {
            const user = {
                email: loginState.email,
                password: loginState.password
            }
            dispatch(login(user));
        }; 

        if(isLoggedIn){
            history.push("/")
        }
    }, [formIsSended, loginState, dispatch, history, isLoggedIn]);

    return (
        <Form>
            <FormGroup field={formFieldLogin.email} action={GET_EMAIL}/>
            <FormGroup field={formFieldLogin.password} action={GET_PASSWORD}/>
            <Button type="submit">Valider</Button>
            <p>{errorLogin && errorLogin}</p>
        </Form>
    );
};

export default Login;