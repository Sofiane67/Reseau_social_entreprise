import  {memo, useContext} from "react";
import InputContext from "../../store/inputValue-context";
import classes from "./Form.module.scss";

const Form = props => {
    const ctx = useContext(InputContext);
    
    const submitFormHandler = e => {
        e.preventDefault();
        props.onSubmitForm(ctx, true)
        console.log(ctx)
    }

    return (
        <form onSubmit={submitFormHandler} className={classes.form}>
            {props.children}
        </form>
    );
}

export default memo(Form);

