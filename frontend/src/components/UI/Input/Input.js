import classes from "./Input.module.scss";

const Input = props => {
    return <input type={props.type} name={props.name} id={props.id} className={classes["form__input"]} />
}


export default Input;