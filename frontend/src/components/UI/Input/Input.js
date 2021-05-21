import useInput from "../../../hooks/use-input";
import classes from "./Input.module.scss";

const Input = props => {

    const { inputValue, changeValueHandler} = useInput(props.action);

    return (
        <input 
        type={props.type} 
        name={props.name} 
        id={props.id} 
        className={classes["form__input"]} 
        onChange={changeValueHandler}
        value={inputValue}
        />
    );
}


export default Input;