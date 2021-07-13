import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./FeedBack.module.scss";

const FeedBack = props => {
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => dispatch({ type: "INIT_FEEDBACK" }) ,2500);
        return () => clearTimeout(timer)
    },[]);
    console.log(props.status)
    return (
        <div className={`${classes.feedback} ${classes[`feedback--${props.status}`]}`}>
            <p className={classes[`feedback__message--${props.status}`]}>{props.message}</p>
        </div>
    )
}   

export default FeedBack;