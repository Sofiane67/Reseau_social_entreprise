import classes from "./Icon.module.scss";
const Icon = props => {
    return (
        <div className={classes['icon__icon-box']}>
            <img src={props.icon} className={classes["icon__img"]}/>
        </div>
    )
}   

export default Icon;