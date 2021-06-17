import {Fragment, useState} from "react";
import Form from "../Form/Form";
import FormGroup from "../FormGroup/FormGroup";
import Input from "../UI/Input/Input";
import InputFile from "../UI/Input/inputFile/inputFile";
import Textarea from "../UI/Textarea/Textarea";
import {useEffect} from "react";
import classes from "./FormPost.module.scss";
import {formFieldPost} from "../../utils/formFields";
import {formData} from "../../utils/funcsHelper";
import {GET_POST_TEXT, GET_POST_IMAGE} from "../../redux/actions/form/type";
import {useSelector, useDispatch} from "react-redux";
import { addPost } from "../../redux/actions/posts/actions";
import { editPost } from "../../redux/actions/posts/actions";

const FormPost = props => {

    const dispatch = useDispatch();
    const postDataStored = useSelector(state => state.formInputValue);
    const formIsSended = useSelector(state => state.formInputValue.isSend);
    const [isShow, setIsShow] = useState(false);
    const modal = useSelector(store => store.modal);
    const { forumId, postId } = modal;
    const action = props.action ? props.action : "add";
    const data = formData(postDataStored);

    useEffect(() => {
        if(formIsSended){
            switch (action) {
                case "add":
                    dispatch(addPost(data));
                    break;
                case "edit": 
                    dispatch(editPost(data, forumId, postId));
                    break;
                case "add_comment":
                    console.log("COMMENTAIRE AJOUTE");
                    break;
                default:
                    break;
            }
            dispatch({ type: GET_POST_IMAGE, value: null })
        }
    } ,[formIsSended, dispatch, postDataStored]);

    const showImageField = e => {
        e.preventDefault();
        setIsShow(state => !state);
    };

    return (
            <Form className="form__post">
                <FormGroup>
                    <Textarea field={formFieldPost.text} rows="12" cols="60" action={GET_POST_TEXT}/>
                </FormGroup>
                {(!isShow && modal.type !== "comment") && <span className={classes["formPost__add-image-btn"]} onClick={showImageField}>Ajouter image</span>}
                {
                    isShow &&(
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
                {props.children}
            </Form>
    )
}

export default FormPost;