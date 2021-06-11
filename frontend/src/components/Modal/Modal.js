import ReactDOM from "react-dom";
import {Fragment, memo} from "react"
import {useDispatch, useSelector} from "react-redux";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Modal.module.scss";
import {deletePost} from "../../redux/actions/posts/actions";
import {SHOW_MODAL} from "../../redux/actions/modal/types";

const BackDrop = props => <div className={classes.backdrop} onClick={props.onBackDrop}></div>;

const ModalOverlay = props => {
    const dispatch = useDispatch();
    const modal = useSelector(store => store.modal);
    
    const confirmHandler = () => {
        switch (modal.type) {
            case "post":
                dispatch(deletePost(modal.forumId, modal.postId));
                break;
        
            default:
                break;
        }
    }
 
    const cancelDeleteHandler = () => {
        dispatch({type: SHOW_MODAL, value: {isShow: false}})
    }

    return (
        <Fragment>
            <Card className="card__modal">
                <p className={classes["modal__message"]}>{modal.message}</p>
                <div>
                    <Button onClick={confirmHandler} className="button__modal--action">{modal.nameButton}</Button>
                    <Button onClick={cancelDeleteHandler} className="button__modal--cancel">Annuler</Button>
                </div>
            </Card>
        </Fragment>   
    )
}

const Modal = props => {
    console.log("MODAL");
    return (
        <Fragment>
            {ReactDOM.createPortal(<BackDrop />, document.querySelector('#backdrop'))}
            {ReactDOM.createPortal(<ModalOverlay nameButton={props.nameButton} postId={props.postId} forumId={props.forumId} onShowModal={props.onShowModal}/>, document.querySelector('#overlay'))}
        </Fragment>
    )
}

export default memo(Modal);