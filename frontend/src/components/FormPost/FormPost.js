import { Fragment, useState, useEffect} from "react";
import Form from "../Form/Form";
import FormGroup from "../FormGroup/FormGroup";
import Textarea from "../UI/Textarea/Textarea";
import GifList from "../GifList/GifList"
import ImageUrlField from "../ImageUrlFiel/ImageUrlField";
import classes from "./FormPost.module.scss";
import {formFieldPost} from "../../utils/formFields";
import {formData} from "../../utils/funcsHelper";
import {GET_POST_TEXT, GET_POST_IMAGE} from "../../redux/actions/form/type";
import {useSelector, useDispatch} from "react-redux";
import { addPost } from "../../redux/actions/posts/actions";
import { editPost } from "../../redux/actions/posts/actions";
import { addComment, editComment} from "../../redux/actions/comments/actions";

const FormPost = props => {
    const dispatch = useDispatch();
    const postDataStored = useSelector(state => state.formInputValue);
    const formIsSended = useSelector(state => state.formInputValue.isSend);
    const [showImageField, setShowImageField] = useState(false);
    const [showGifList, setShowGifList] = useState(false);
    const modal = useSelector(store => store.modal);
    const { forumId, postId, commentId} = modal;
    const action = props.action ? props.action : "add";
    const data = postDataStored.imageUrl ? formData(postDataStored) : { text: postDataStored.text };
    const {forum} = props;
    
    useEffect(() => {
        if(formIsSended){
            switch (action) {
                case "add":
                    dispatch(addPost(data, forum));
                    break;
                case "edit": 
                    dispatch(editPost(data, forum, postId));
                    break;
                case "add_comment":
                    dispatch(addComment(data,postId,forum));
                    break;
                case "edit_comment":
                    dispatch(editComment(data,commentId, forum));
                    break;
                default:
                    break;
            }
            dispatch({ type: GET_POST_IMAGE, value: null })
        }
    }, [formIsSended]);

    const showImageFieldHandler = e => {
        setShowImageField(state => !state);
        setShowGifList(false);
    };

    const showGifListdHandler = e => {
        setShowGifList(state => !state);
        setShowImageField(false);
    };

    return (
            <Form className="form__post">
                <FormGroup>
                    <Textarea field={formFieldPost.text} rows={props.rowSize ?? 12} cols="60" action={GET_POST_TEXT}/>
                </FormGroup>
                <div>                    
                    <div>
                        {
                            !showImageField && <span className={classes["formPost__add-image-btn"]} onClick={showImageFieldHandler}>Ajouter image</span>
                        }
                        {
                            forum == 1 && (
                                <Fragment>
                                    {!showGifList && <span className={classes["button-add-multimedia"]} onClick={showGifListdHandler}>Ajouter un GIF</span>}
                                </Fragment>
                            )
                        }
                        {
                            showGifList && <GifList/>
                        }
                        {
                            showImageField && <ImageUrlField/>
                        }
                    </div>
                </div>
                

                {props.children}
            </Form>
    )
}

export default FormPost;