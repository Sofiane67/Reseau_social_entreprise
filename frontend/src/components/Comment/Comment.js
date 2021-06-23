import { useState } from "react";
import FormPost from "../FormPost/FormPost";
import ButtonsModal from "../ButtonModal/ButtonsModal";
import { useDispatch,useSelector } from "react-redux";
import classes from "./Comment.module.scss";
import { showModal } from "../../redux/actions/modal/actions";

const Comment = props => {
    const [nameBtnLearnMore, setNameBtnLearnMore] = useState("Afficher plus");
    const userId = useSelector(store => store.login.userId);
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

    const classeText = props.text.length >= 400 ? `${classes["comment__text"]} ${classes["comment__text--overflow"]}` : classes["comment__text"];
    const commentElem = `#comment-${props.commentId}`;
    
    const showMoreCommentHandler = e => {
        document.querySelector(commentElem).classList.toggle(classes["comment__text--overflow"]);
        nameBtnLearnMore === "Afficher plus" ? setNameBtnLearnMore("Afficher moins"): setNameBtnLearnMore("Afficher plus");
    };

    return (
        <div className={classes.comment}>
            {props.children}
            <div className={classes["comment__text-box"]}>
                <p id={`comment-${props.commentId}`} className={classeText}>{props.text}</p>
                {props.text.length >= 400 && <span className={`${classes["comment__action"]} ${classes["comment__action--learn-more"]}`} onClick={showMoreCommentHandler}>{nameBtnLearnMore}</span>}
            </div>
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