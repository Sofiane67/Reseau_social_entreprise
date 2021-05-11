import {useState, useEffect, memo} from "react";
import classes from "./Input.module.scss";


const Input = props => {
    const [inputValue, setInputValue] = useState("");

    const changeValueHandler = (e) => {
        setInputValue(e.target.value);
    };

    useEffect(() => {
        const timer = setTimeout(() => props.onGetInputValue(inputValue), 1000);
        if (props.formIsSend) {
            setInputValue("");
        }

        return () => {
            clearTimeout(timer)
        }
    }, [inputValue, props])

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


export default memo(Input);