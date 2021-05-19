import  {memo} from "react";
import {useDispatch} from "react-redux";
import classes from "./Form.module.scss";
import { FORM_IS_SENDED} from "../../redux/actions/form/type";

const Form = props => {

    const dispatch = useDispatch();

    const submitFormHandler = e => {
        e.preventDefault();
        dispatch({ type: FORM_IS_SENDED, isSend: true});
    }

    return (
        <form onSubmit={submitFormHandler} className={classes.form}>
            {props.children}
        </form>
    );
}

export default memo(Form);

