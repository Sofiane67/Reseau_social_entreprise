import {memo} from "react"
import Input from "../UI/Input/Input";
import classes from "./FormGroup.module.scss";

const FormGroup = props => {

    const {
        htmlFor,
        label,
        type,
        name,
        id
    } = props.field;
 
    return (
        <div className={classes["form__group"]}>
            <label htmlFor={htmlFor} className={classes["form__label"]}>{label}</label>
            <Input type={type} name={name} id={id} className="form__input" action={props.action}/>
        </div>
    );
}

export default memo(FormGroup);