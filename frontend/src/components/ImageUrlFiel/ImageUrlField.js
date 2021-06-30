import { Fragment } from "react";
import FormGroup from "../FormGroup/FormGroup";
import InputFile from "../UI/Input/inputFile/inputFile";
import Input from "../UI/Input/Input";
import { formFieldPost } from "../../utils/formFields";
import { GET_POST_IMAGE } from "../../redux/actions/form/type";

const ImageUrlField = () => {
    return (
        <Fragment>
            <FormGroup field={formFieldPost.imageUrl}>
                <Input field={formFieldPost.imageUrl} action={GET_POST_IMAGE} />
            </FormGroup>
            <FormGroup>
                <InputFile field={formFieldPost.imageFile} action={GET_POST_IMAGE} />
            </FormGroup>
        </Fragment>
    )
}

export default ImageUrlField;