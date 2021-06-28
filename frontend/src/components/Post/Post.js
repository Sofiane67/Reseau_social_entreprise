import {Fragment,useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import FormPost from "../FormPost/FormPost";
import ButtonsModal from "../ButtonModal/ButtonsModal";
import Author from "../Author/Author";
import Comment from "../Comment/Comment";
import Icon from "../Icon/Icon";
import classes from "./Post.module.scss";
import {showModal} from "../../redux/actions/modal/actions";

import iconText from "../../images/icons/text-icon.svg";
import iconMultimedia  from "../../images/icons/multimedia-icon.svg";

const Post = props => {
    
    const dispatch = useDispatch();
    const userId = useSelector(store => store.login.userId);
    const [nameBtnLearnMore, setNameBtnLearnMore] = useState("Afficher plus");
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
            nameButton: "Supprimer",
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

    const classeText = props.text.length >= 400 ? `${classes["post__text"]} ${classes["post__text--overflow"]}` : classes["post__text"];
    const postElem = `#post-${postId}`;

    const showMorePostHandler = e => {
        document.querySelector(postElem).classList.toggle(classes["post__text--overflow"]);
        nameBtnLearnMore === "Afficher plus" ? setNameBtnLearnMore("Afficher moins") : setNameBtnLearnMore("Afficher plus");
    };
    
    const commentsBoxElem = `#comments-${postId}`;
    const a = classes["post__comments"];
    const showAllCommentsHandler = e => {
        document.querySelector(commentsBoxElem).classList.remove(classes["post__comments--hidden"]);
        document.querySelector(commentsBoxElem).classList.add(a)
        nameBtnLearnMore === "Afficher plus" ? setNameBtnLearnMore("Afficher moins") : setNameBtnLearnMore("Afficher plus");
    };
   
    return (
        <Fragment>
            <Card className="card__post">
                <Icon icon={forumId == 1 ? iconMultimedia : iconText} />
                <Author name={name} firstName={firstName} createdAt={createdAt} updatedAt={updatedAt}/>
                
                <div className={classes["post__text-box"]}>
                    <p id={`post-${postId}`} className={classeText}>{props.text}</p>
                    {props.text.length >= 400 && <span className={classes["post__learn-more"]} onClick={showMorePostHandler}>{nameBtnLearnMore}</span>}
                </div>
                {
                    props.imageUrl && <div className={classes["post__img-box"]}><img src={props.imageUrl} className={classes["post__img"]} alt=""/></div>
                }

                <div className={classes["post__stat-post"]}>
                    <span onClick={showAllCommentsHandler} className={classes["post__stat-comment"]}>{props.comments.length} commentaire{props.comments.length > 1 && "s"}</span>
                    <p>0 partage</p>
                </div>
                <div className={classes["post__action"]}>
                    <Button className="button__post" onClick={showCommentModalHandler}>Commenter</Button>
                    <Button className="button__post">Partager</Button>
                    {isAuthor && <Button className="button__post" onClick={showUpdateModalHander}>Modifier</Button>}
                    {isAuthor && <Button className="button__post" onClick={showDeleteModalHandler}>Supprimer</Button>}
                </div>
                <div id={`comments-${postId}`} className={`${classes["post__comments--hidden"]}`}>
                    {
                        comments.map(comment => {
                            const {
                                name: nameComment,
                                firstName: firstNameComment,
                                createdAt: createdAtComment,
                                updatedAt: updatedAtComment,
                                id: userIdComment,
                            } = comment.user;

                            return <Comment key={comment.id} commentId={comment.id} userId={userIdComment} text={comment.text}><Author name={nameComment} firstName={firstNameComment} createdAt={createdAtComment} updatedAt={updatedAtComment} /></Comment>
                        })
                    }
                </div>
            </Card>
        </Fragment>
    )
}

export default Post;