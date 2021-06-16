import { useDispatch } from "react-redux";
import Button from "../UI/Button/Button";
import classes from "./ButtonModal.module.scss";
import { SHOW_MODAL } from "../../redux/actions/modal/types";

const ButtonsModal = props => {
    const dispatch = useDispatch();
    const cancelDeleteHandler = () => {
        dispatch({ type: SHOW_MODAL, value: { isShow: false } })
    }

    return (
        <div className={classes.buttonModal}>
            <Button onClick={props.onClick} className="button__modal--action">{props.nameButton}</Button>
            <Button onClick={cancelDeleteHandler} type="button" className="button__modal--cancel">Annuler</Button>
        </div>
    );
};

export default ButtonsModal;