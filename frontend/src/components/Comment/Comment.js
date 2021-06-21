import { useSelector } from "react-redux";
import classes from "./Comment.module.scss";

const Comment = props => {
    const userId = useSelector(store => store.login.userId);

    const {
        name,
        firstName,
        createdAt,
        updatedAt,
        text,
        userId: authorId
    } = props;

    const isAuthor = authorId === userId;

    console.log(userId, authorId, isAuthor)

    return (
        <div className={classes.comment}>
            {/* <Author name={name} firstName={firstName} createdAt={createdAt} updatedAt={updatedAt} /> */}
            {props.children}
            <p className={classes["comment__text"]}>{props.text}</p>
            {isAuthor && (
                <div className={classes["comment__action-box"]}>
                    <span className={`${classes["comment__action"]} ${classes["comment__action--edit"]}`}>Modifier</span>
                    <span className={`${classes["comment__action"]} ${classes["comment__action--delete"]}`}>Supprimer</span>
                </div>
            )}
            
        </div>  
    )
}

export default Comment;