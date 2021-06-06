import classes from "./Wrapper.module.scss";

const Wrapper = props => {
    const className = props.className;
    console.log(className);
    return <div className={`${classes.wrapper} ${classes[className]}`}>{props.children}</div>
}

export default Wrapper;