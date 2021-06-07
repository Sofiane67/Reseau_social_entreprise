import {useDispatch, useSelector} from "react-redux";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Post.module.scss";
import {dateFormat} from "../../utils/funcsHelper";
import { deletePost} from "../../redux/actions/posts/actions";
const Post = props => {
    const userId = useSelector(store => store.login.userId);
    const dispatch = useDispatch();
    const {
        name,
        firstName,
        createdAt,
        updatedAt,
        id: authorId
    } = props.author;

    const{
        forum: forumId,
        id: postId
    } = props;

    const isAuthor = authorId === userId;

    const deletePostHandler = (e) => {
        console.log("POST SUPPRIMEE");
        dispatch(deletePost(forumId, postId));
    }

    return (
        <Card className="card__post">
            <div className={classes["post__head"]}>
                <div className={classes["post__avatar-box"]}>
                    <p className={classes["post__avatar--initial"]}>{`${firstName[0]}${name[0]}`}</p>
                </div>
                <div className={classes["post__info"]}>
                    <p className={classes["post__author"]}>{`${name} ${firstName}`}</p>
                    <p className={classes["post__date"]}>
                        <span>Créé le {dateFormat(createdAt)}</span>
                        {updatedAt != createdAt && `Modifié le ${dateFormat(updatedAt)}`}
                    </p>
                </div>
            </div>
            <p className={classes["post__text"]}>{props.text}</p>
            {
               props.imageUrl && <div className={classes["post__img-box"]}><img src={props.imageUrl} className={classes["post__img"]} /></div>
            }
            
            <div className={classes["post__stat-post"]}>
                <p>0 commentaire</p>
                <p>0 partage</p>
            </div>
            <div className={classes["post__action"]}>
                <Button className="button__post">Commenter</Button>
                <Button className="button__post">Partager</Button>
                {isAuthor && <Button className="button__post">Modifier</Button>}
                {isAuthor && <Button className="button__post" onClick={deletePostHandler} >Supprimer</Button>}
            </div>
        </Card>
    )
}

export default Post;