import Card from "../UI/Card/Card";
import classes from "./Post.module.scss";
const Post = props => {
    return (
        <Card>
            <p>{props.text}</p>
            <div>
                <img src={props.imageUrl}/>
            </div>
        </Card>
    )
}

export default Post;