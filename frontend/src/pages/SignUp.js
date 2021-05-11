import Form from "../components/Form/Form";
import FormGroup from "../components/FormGroup/FormGroup";
import Button from "../components/UI/Button/Button";

import { formFieldsSignUp} from "../utils/formFields";

const SignUp = () => {
    return (
        <Form>
            {formFieldsSignUp.map(field => <FormGroup field={field} key={field.id}/>)}
            <Button>Valider</Button>
        </Form>
    );
};

export default SignUp;