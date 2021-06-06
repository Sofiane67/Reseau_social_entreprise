import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Post.module.scss";
const Post = props => {
    return (
        <Card className="card__post">
            <p className={classes["post__text"]}>{props.text}</p>
            <div className={classes["post__img-box"]}>
                <img src={props.imageUrl} className={classes["post__img"]}/>
            </div>
            <div className={classes["post__stat-post"]}>
                <p>0 commentaire</p>
                <p>0 partage</p>
            </div>
            <div className={classes["post__action"]}>
                <Button className="button__post">Commenter</Button>
                <Button className="button__post">Partager</Button>
            </div>
        </Card>
    )
}

export default Post;