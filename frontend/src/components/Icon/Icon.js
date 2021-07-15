import classes from "./Icon.module.scss";
const Icon = props => {
    return (
        <div className={`${classes['icon__icon-box']}`}>
            <img src={props.icon} className={classes["icon__img"]} alt="icon svg"/>
        </div>
    )
}   

export default Icon;