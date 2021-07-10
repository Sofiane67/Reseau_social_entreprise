import useInput from "../../../hooks/use-input";
import classes from "./Textarea.module.scss"

const Textarea = props => {
    const {name, placeholder} = props.field;
    const {inputValue, changeValueHandler} = useInput(props.action);
    return <textarea className={classes.textarea} name={name} placeholder={placeholder} onChange={changeValueHandler} value={inputValue} rows={props.rows} cols={props.cols}></textarea>
};

export default Textarea;