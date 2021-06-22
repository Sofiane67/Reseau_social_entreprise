import FormPost from "../FormPost/FormPost";
import ButtonsModal from "../ButtonModal/ButtonsModal";
import { useDispatch,useSelector } from "react-redux";
import classes from "./Comment.module.scss";
import { showModal } from "../../redux/actions/modal/actions";

const Comment = props => {
    const userId = useSelector(store => store.login.userId);
    const modal = useSelector(store => store.modal);
    const dispatch = useDispatch();
    const authorId = props.userId;
    const isAuthor = authorId === userId;

    const modalContent = {
        isShow: true,
        nameButton: "",
        type: "comment",
        commentId: props.commentId,
        content: ""
    }

    const showUpdateModalHander = e => {
        dispatch(showModal({
            ...modalContent,
            sql: "update",
            content: <FormPost action="edit_comment" ><ButtonsModal nameButton="Modifier" /> </FormPost>
        }))
    };

    const showDeleteModalHandler = e => {
        dispatch(showModal({
            ...modalContent,
            nameButton: "Supprimer",
            sql: "delete",
            content: "Confirmez vous la suppression de votre commentaire ?"
        }))
    };

    return (
        <div className={classes.comment}>
            {/* <Author name={name} firstName={firstName} createdAt={createdAt} updatedAt={updatedAt} /> */}
            {props.children}
            <p className={classes["comment__text"]}>{props.text}</p>
            {isAuthor && (
                <div className={classes["comment__action-box"]}>
                    <span className={`${classes["comment__action"]} ${classes["comment__action--edit"]}`} onClick={showUpdateModalHander}>Modifier</span>
                    <span className={`${classes["comment__action"]} ${classes["comment__action--delete"]}`} onClick={showDeleteModalHandler}>Supprimer</span>
                </div>
            )}
            
        </div>  
    )
}

export default Comment;