import {memo} from "react"
import classes from "./FormGroup.module.scss";

const FormGroup = props => {

    let htmlFor;
    let label;
    if(props.field){
        htmlFor = props.field.htmlFor;
        label = props.field.label;
    }

    console.log(props.field);
 
    return (
        <div className={classes["form__group"]}>
            {label && <label htmlFor={htmlFor} className={classes["form__label"]}>{label}</label>}
            {props.children}
        </div>
    );
}

export default memo(FormGroup);