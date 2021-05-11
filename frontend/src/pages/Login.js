import Form from "../components/Form/Form";
import FormGroup from "../components/FormGroup/FormGroup";
import Button from "../components/UI/Button/Button";

import {formFieldLogin} from "../utils/formFields";

const Login = () => {
    return (
        <Form>
            {formFieldLogin.map(field => <FormGroup field={field} key={field.id} />)}
            <Button>Valider</Button>
        </Form>
    );
};

export default Login;