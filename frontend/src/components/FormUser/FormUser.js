import { useSelector } from "react-redux";
import FormGroup from "../FormGroup/FormGroup";
import Input from "../UI/Input/Input";
import {Fragment} from "react";
import { formFieldUser } from "../../utils/formFields";
import { GET_NAME, GET_FIRSTNAME, GET_EMAIL, GET_PASSWORD } from "../../redux/actions/form/type";

const FormUser =  props => {
    const isLoggedIn = useSelector(store => store.login.isLoggedIn);
    const {user, edit} = props;
    
    return (
        <Fragment>
            <FormGroup field={formFieldUser.name}>
                {!isLoggedIn || edit ? <Input field={formFieldUser.name} action={GET_NAME} /> : <p>{user.name}</p>}
            </FormGroup>
            <FormGroup field={formFieldUser.firstName} >
                {!isLoggedIn || edit ? <Input field={formFieldUser.firstName} action={GET_FIRSTNAME} /> : <p>{user.firstName}</p>}
            </FormGroup>
            <FormGroup field={formFieldUser.email}>
                {!isLoggedIn || edit ? <Input field={formFieldUser.email} action={GET_EMAIL} /> : <p>{user.email}</p>}
            </FormGroup>
            {
                !isLoggedIn || edit ? (
                    <FormGroup field={formFieldUser.password}>
                        <Input field={formFieldUser.password} action={GET_PASSWORD} />
                    </FormGroup> 
                ) : ""
            }
        </Fragment>
    )
}

export default FormUser;