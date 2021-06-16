import {Fragment, useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import FormPost from "../FormPost/FormPost";
import ButtonsModal from "../ButtonModal/ButtonsModal";
import classes from "./Post.module.scss";
import {dateFormat} from "../../utils/funcsHelper";
import {showModal} from "../../redux/actions/modal/actions";
import { formData } from "../../utils/funcsHelper";

const Post = props => {
    const dispatch = useDispatch();
    const postDataStored = useSelector(state => state.formInputValue);
    const userId = useSelector(store => store.login.userId);

    const {
        name,
        firstName,
        createdAt,
        updatedAt,
        id: authorId
    } = props.author;

    const {
        forum: forumId,
        id: postId
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
            content: <FormPost edit={{forumId, postId}} ><ButtonsModal nameButton="Modifier" /> </FormPost>
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
                    {isAuthor && <Button className="button__post" onClick={showUpdateModalHander}>Modifier</Button>}
                    {isAuthor && <Button className="button__post" onClick={showDeleteModalHandler}>Supprimer</Button>}
                </div>
            </Card>
        </Fragment>
    )
}

export default Post;