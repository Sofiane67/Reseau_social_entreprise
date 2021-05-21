import useInput from "../../../hooks/use-input";
import classes from "./Input.module.scss";

const Input = props => {

    const { inputValue, changeValueHandler} = useInput(props.action);
    const {
        type,
        name,
        id
    } = props.field;

    return (
        <input 
        type={type} 
        name={name} 
        id={id} 
        className={classes["form__input"]} 
        onChange={changeValueHandler}
        value={inputValue}
        />
    );
}


export default Input;