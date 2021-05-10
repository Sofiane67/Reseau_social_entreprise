import {useState} from "react";
import classes from "./Input.module.scss";

const Input = props => {

    const [isRequired, setIsRequired] = useState("");

    if(props.required) setIsRequired(props.required)

    return (
        <div className={classes["input-group"]}>
            <label htmlFor={props.htmlFor} className={classes["input-group__lable"]}>{props.label}</label>
            <input type={props.type} name={props.name} id={props.id} placeholder={props.placeholder} className={classes["input-group__input"]} required/>
        </div>
    )
}

export default Input;