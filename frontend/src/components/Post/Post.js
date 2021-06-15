import {Fragment} from "react";
import {useSelector, useDispatch} from "react-redux";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Post.module.scss";
import {dateFormat} from "../../utils/funcsHelper";
import {showModal} from "../../redux/actions/modal/actions";

const Post = props => {
    const dispatch = useDispatch();
    const userId = useSelector(store => store.login.userId);

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


    const showModalHandler = (e) => {
        dispatch(showModal({
            isShow: true,
            nameButton: e.target.innerText,
            type: "post",
            forumId,
            postId,
            sql: "delete",
            message: "Confirmez vous la suppression du post ?"
        }))
    }




    return (
        <Fragment>
            <Card className="card__post">
                <div className={classes["post__head"]}>
                    <div className={classes["post__avatar-box"]}>
                        <p className={classes["post__avatar--initial"]}>{`${firstName[0]}${name[0]}`}</p>
                    </div>
                    <div className={classes["post__info"]}>
                        <p className={classes["post__author"]}>{`${name} ${firstName}`}</p>
                        <p className={classes["post__date"]}>
                            <span>Créé le {dateFormat(createdAt)}</span>
                            {updatedAt !== createdAt && `Modifié le ${dateFormat(updatedAt)}`}
                        </p>
                    </div>
                </div>
                <p className={classes["post__text"]}>{props.text}</p>
                {
                    props.imageUrl && <div className={classes["post__img-box"]}><img src={props.imageUrl} className={classes["post__img"]} alt=""/></div>
                }

                <div className={classes["post__stat-post"]}>
                    <p>0 commentaire</p>
                    <p>0 partage</p>
                </div>
                <div className={classes["post__action"]}>
                    <Button className="button__post">Commenter</Button>
                    <Button className="button__post">Partager</Button>
                    {isAuthor && <Button className="button__post">Modifier</Button>}
                    {isAuthor && <Button className="button__post" onClick={showModalHandler}>Supprimer</Button>}
                </div>
            </Card>
        </Fragment>
    )
}

export default Post;