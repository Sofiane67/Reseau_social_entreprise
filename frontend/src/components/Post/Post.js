import {Fragment} from "react";
import {useSelector, useDispatch} from "react-redux";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import FormPost from "../FormPost/FormPost";
import ButtonsModal from "../ButtonModal/ButtonsModal";
import Author from "../Author/Author";
import Comment from "../Comment/Comment";
import classes from "./Post.module.scss";
import {showModal} from "../../redux/actions/modal/actions";

const Post = props => {
    const dispatch = useDispatch();
    const userId = useSelector(store => store.login.userId);
    const posts = useSelector(store => store.posts)

    const {
        name,
        firstName,
        createdAt,
        updatedAt,
        id: authorId
    } = props.author;

    const {
        forum: forumId,
        id: postId,
        comments
    } = props;

    const isAuthor = authorId === userId;

    const modalContent = {
        isShow: true,
        nameButton: "",
        type: "post",
        forumId,
        postId,
        content: ""
    }

    const showDeleteModalHandler = e => {
        dispatch(showModal({
            ...modalContent,
            nameButton: e.target.innerText,
            type: "post",
            forumId,
            postId,
            sql: "delete",
            content: "Confirmez vous la suppression du post ?"
        }))
    };

    const showUpdateModalHander = e => {
        dispatch(showModal({
            ...modalContent,
            sql: "update",
            content: <FormPost action="edit" ><ButtonsModal nameButton="Modifier" /> </FormPost>
        }))
    }

    const showCommentModalHandler = e => {
        dispatch(showModal({
            ...modalContent,
            type: "comment",
            content: <FormPost action="add_comment"><ButtonsModal nameButton="Commenter"/> </FormPost>
        }))
    }

    // console.log(props.comments)
   
    return (
        <Fragment>
            <Card className="card__post">
                <Author name={name} firstName={firstName} createdAt={createdAt} updatedAt={updatedAt}/>
                <p className={classes["post__text"]}>{props.text}</p>
                {
                    props.imageUrl && <div className={classes["post__img-box"]}><img src={props.imageUrl} className={classes["post__img"]} alt=""/></div>
                }

                <div className={classes["post__stat-post"]}>
                    <p>{props.comments.length} commentaire{props.comments.length > 1 && "s"}</p>
                    <p>0 partage</p>
                </div>
                <div className={classes["post__action"]}>
                    <Button className="button__post" onClick={showCommentModalHandler}>Commenter</Button>
                    <Button className="button__post">Partager</Button>
                    {isAuthor && <Button className="button__post" onClick={showUpdateModalHander}>Modifier</Button>}
                    {isAuthor && <Button className="button__post" onClick={showDeleteModalHandler}>Supprimer</Button>}
                </div>
                {
                    comments.map(comment => {
                        const {
                            name: nameComment,
                            firstName: firstNameComment,
                            createdAt: createdAtComment,
                            updatedAt: updatedAtComment,
                            id: userIdComment
                        } = comment.user;

                        return <Comment key={comment.id} userId={userIdComment} text={comment.text}><Author name={nameComment} firstName={firstNameComment} createdAt={createdAtComment} updatedAt={updatedAtComment} /></Comment>
                    })
                }
            </Card>
        </Fragment>
    )
}

export default Post;