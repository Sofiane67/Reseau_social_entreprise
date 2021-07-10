import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Form from "../components/Form/Form";
import FormUser from "../components/FormUser/FormUser";
import Button from "../components/UI/Button/Button";
import { signup } from "../redux/actions/form/actions";

const SignUp = () => {

    const dispatch = useDispatch();
    const formIsSended = useSelector(store => store.formInputValue.isSend);
    const userDataStrored = useSelector(store => store.formInputValue);
    const isLoggedIn = useSelector(store => store.login.isLoggedIn);
    const errorLogin = useSelector(state => state.formInputValue.error);

    useEffect(()=>{
        if(formIsSended){

            const user = {
                name: userDataStrored.name,
                firstName: userDataStrored.firstName,
                email: userDataStrored.email,
                password: userDataStrored.password
            }

            !isLoggedIn && dispatch(signup(user));
        }

    },[formIsSended, userDataStrored, dispatch]); 

    return(
        <Form className="form__logout">
        <FormUser/>
        <Button type="submit">Valider</Button>
        <p>{errorLogin && errorLogin}</p>
    </Form>
    )
}

export default SignUp;