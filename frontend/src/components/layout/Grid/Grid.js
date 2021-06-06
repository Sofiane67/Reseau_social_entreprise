import classes from "./Grid.module.scss";

const Grid = props => {
    return <div className={classes.grid}>{props.children}</div>
}

export default Grid