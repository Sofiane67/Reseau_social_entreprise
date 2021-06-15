import ReactDOM from "react-dom";
import {Fragment, memo} from "react"
import {useDispatch, useSelector} from "react-redux";
import Card from "../UI/Card/Card";
import ButtonsModal from "../ButtonModal/ButtonsModal";
import Button from "../UI/Button/Button";
import classes from "./Modal.module.scss";
import {deletePost} from "../../redux/actions/posts/actions";
import {SHOW_MODAL} from "../../redux/actions/modal/types";

const BackDrop = props => <div className={classes.backdrop} onClick={props.onBackDrop}></div>;

const ModalOverlay = props => {
    const dispatch = useDispatch();
    const modal = useSelector(store => store.modal);
    console.log(modal)
    
    const confirmHandler = () => {
        switch (modal.type) {
            case "post":
                dispatch(deletePost(modal.forumId, modal.postId));
                break;
        
            default:
                break;
        }
    }
    return (
        <Fragment>
            <Card className="card__modal">
                <div className={classes["modal__message"]}>{modal.message}</div>
                {modal.sql !== "insert" && <ButtonsModal onClick={confirmHandler} nameButton={modal.nameButton}/>}
            </Card>
        </Fragment>   
    )
}

const Modal = props => {
    console.log("MODAL");
    return (
        <Fragment>
            {ReactDOM.createPortal(<BackDrop />, document.querySelector('#backdrop'))}
            {ReactDOM.createPortal(<ModalOverlay />, document.querySelector('#overlay'))}
        </Fragment>
    )
}

export default memo(Modal);