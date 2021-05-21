import classes from "./Card.module.scss";

const Card = props => <div className={classes.card}>{props.children}</div>

export default Card;