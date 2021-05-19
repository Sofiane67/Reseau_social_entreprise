import {useState, useEffect, memo} from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Input.module.scss";


const Input = props => {
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();
    const formIsSended = useSelector(state => state.formInputValue.isSend);
    const action = props.action;

    const changeValueHandler = (e) => {
        setInputValue(e.target.value);
    };

    useEffect(() => {
        const timer = setTimeout(() => dispatch({type: action, value: inputValue}), 500);

        if(formIsSended){
            setInputValue("");
        }

        return () => clearTimeout(timer)
    }, [action, dispatch, inputValue, formIsSended]);

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