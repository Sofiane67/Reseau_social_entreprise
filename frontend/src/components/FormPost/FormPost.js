import {Fragment, useState} from "react";
import Form from "../Form/Form";
import FormGroup from "../FormGroup/FormGroup";
import Input from "../UI/Input/Input";
import InputFile from "../UI/Input/inputFile/inputFile";
import Textarea from "../UI/Textarea/Textarea";
import {useEffect} from "react";
import Button from "../UI/Button/Button";
import {formFieldPost} from "../../utils/formFields";
import {GET_POST_TEXT, GET_POST_IMAGE} from "../../redux/actions/form/type";
import {useSelector, useDispatch} from "react-redux";
import {addPost} from "../../redux/actions/form/actions";
const FormPost = () => {

    const dispatch = useDispatch();
    const postDataStored = useSelector(state => state.formInputValue);
    const formIsSended = useSelector(state => state.formInputValue.isSend);
    const [isShow, setIsShow] = useState(false);
    
    useEffect(() => {
        if(formIsSended){
            const formData = new FormData();
            formData.append("text", postDataStored.text);
            if (postDataStored.imageUrl) formData.append("imageUrl", postDataStored.imageUrl);
            dispatch(addPost(formData));
            dispatch({ type: GET_POST_IMAGE, value: null})
            setIsShow(false);
        }
    } ,[formIsSended, dispatch, postDataStored]);

    const showHandler = () => {
        setIsShow(state => !state);
    };

    return (
            <Form>
                <FormGroup>
                    <Textarea field={formFieldPost.text} action={GET_POST_TEXT}/>
                </FormGroup>
                <span onClick={showHandler}>Ajouter image</span>
                {
                    isShow &&(
                    <Fragment>
                        <FormGroup>
                            <Input field={formFieldPost.imageUrl} action={GET_POST_IMAGE} />
                        </FormGroup>
                        <FormGroup>
                            <InputFile field={formFieldPost.imageFile} action={GET_POST_IMAGE} />
                        </FormGroup>
                    </Fragment>
                    )
                }
                <Button>Publier</Button>
            </Form>
    )
}

export default FormPost;