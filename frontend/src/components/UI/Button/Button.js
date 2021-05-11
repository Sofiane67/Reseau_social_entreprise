import classes from "./Button.module.scss";

const Button = props => {
    return <button className={`${classes.button}`} type={props.type}>{props.children}</button>
}

export default Button;