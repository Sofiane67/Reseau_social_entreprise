import {memo} from "react"
import classes from "./FormGroup.module.scss";

const FormGroup = props => {

    const {
        htmlFor,
        label,
    } = props.field;
 
    return (
        <div className={classes["form__group"]}>
            <label htmlFor={htmlFor} className={classes["form__label"]}>{label}</label>
            {props.children}
        </div>
    );
}

export default memo(FormGroup);