import ReactDOM from "react-dom";
import {Fragment, memo} from "react"
import {useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router";
import Card from "../UI/Card/Card";
import ButtonsModal from "../ButtonModal/ButtonsModal";
import classes from "./Modal.module.scss";
import {deletePost} from "../../redux/actions/posts/actions";
import { deleteComment } from "../../redux/actions/comments/actions";
import {deleteUser} from "../../redux/actions/user/actions";
import { LOGOUT } from "../../redux/actions/login/types";

const BackDrop = props => <div className={classes.backdrop} onClick={props.onBackDrop}></div>;

const ModalOverlay = props => {
    const dispatch = useDispatch();
    const modal = useSelector(store => store.modal);
    const history = useHistory();
    const confirmHandler = () => {
        switch (modal.type) {
            case "post":
                dispatch(deletePost(modal.forumId, modal.postId));
                break;
            case "comment":
                dispatch(deleteComment(modal.commentId));
                break;
            case "account":
                
                dispatch(deleteUser(modal.userId));
                dispatch({ type: LOGOUT, value: { isLoggedIn: false}})
                history.push("/signup");
                break;
            default:
                break;
        }
    }

    return (
        <Fragment>
            <Card className="card__modal">
                <div className={classes["modal__message"]}>{modal.content}</div>
                {(modal.sql == "delete") ? <ButtonsModal onClick={confirmHandler} nameButton={modal.nameButton}/>:""}
            </Card>
        </Fragment>   
    )
}

const Modal = props => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<BackDrop />, document.querySelector('#backdrop'))}
            {ReactDOM.createPortal(<ModalOverlay />, document.querySelector('#overlay'))}
        </Fragment>
    )
}

export default memo(Modal);