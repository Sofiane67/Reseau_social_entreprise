import classes from "./Button.module.scss";

const Button = props => {
    const propsClass = props.className;
    return <button onClick={props.onClick} className={`${classes.button}  ${props.className ? classes[propsClass] : ""}`} type={props.type}>{props.children}</button>
}

export default Button;