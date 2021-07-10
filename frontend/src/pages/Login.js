import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import Form from "../components/Form/Form";
import FormGroup from "../components/FormGroup/FormGroup";
import Input from "../components/UI/Input/Input";
import Button from "../components/UI/Button/Button";
import { formFieldLogin} from "../utils/formFields";
import { GET_EMAIL, GET_PASSWORD } from "../redux/actions/form/type";
import {login} from "../redux/actions/login/actions";
import FeedBack from "../components/FeedBack/FeedBack";

const Login = () => {
    const history = useHistory();
    const loginState = useSelector(state => state.formInputValue);
    const formIsSended = useSelector(state => state.formInputValue.isSend);
    const isLoggedIn = useSelector(state => state.login.isLoggedIn);
    const feedBack = useSelector(store => store.feedBack);
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
        <Form className="form__logout">
            <FormGroup field={formFieldLogin.email}>
                <Input field={formFieldLogin.email} action={GET_EMAIL} />
            </FormGroup>
            <FormGroup field={formFieldLogin.password}>
                <Input field={formFieldLogin.password} action={GET_PASSWORD} />
            </FormGroup>
            <Button type="submit">Valider</Button>
            {
                feedBack.message && <FeedBack message={feedBack.message} status={feedBack.status}/>
            }
        </Form>
    );
};

export default Login;