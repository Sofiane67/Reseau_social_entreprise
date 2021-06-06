import classes from "./Card.module.scss";

const Card = props => {
    const propsClass = props.className;;
    return <div className={`${classes.card} ${props.className ? classes[propsClass]:""}`}>{props.children}</div>
}

export default Card;