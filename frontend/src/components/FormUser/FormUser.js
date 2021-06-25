import FormGroup from "../FormGroup/FormGroup";
import Input from "../UI/Input/Input";
import {Fragment} from "react";
import { formFieldUser } from "../../utils/formFields";
import { GET_NAME, GET_FIRSTNAME, GET_EMAIL, GET_PASSWORD } from "../../redux/actions/form/type";


const FormUser =  props => {
    return (
        <Fragment>
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
        </Fragment>

    )
}

export default FormUser;