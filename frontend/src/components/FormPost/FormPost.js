import {Fragment, useState} from "react";
import Form from "../Form/Form";
import FormGroup from "../FormGroup/FormGroup";
import Input from "../UI/Input/Input";
import Textarea from "../UI/Textarea/Textarea";
import {useEffect} from "react";
import Button from "../UI/Button/Button";
import {formFieldPost} from "../../utils/formFields";
import {GET_POST_TEXT, GET_POST_IMAGE} from "../../redux/actions/form/type";
import {useSelector} from "react-redux";

const FormPost = () => {

    const formIsSended = useSelector(state => state.formInputValue.isSend);
    const [isShow, setIsShow] = useState(false);

    const showHandler = () =>{
        setIsShow(state => !state);
        
    };

    useEffect(() => {
        if(formIsSended){
            setIsShow(false);
        }
    } ,[formIsSended]);


    

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
                            <Input field={formFieldPost.imageFile} action={GET_POST_IMAGE} />
                        </FormGroup>
                    </Fragment>
                    )
                }
                <Button>Publier</Button>
            </Form>
    )
}

export default FormPost;