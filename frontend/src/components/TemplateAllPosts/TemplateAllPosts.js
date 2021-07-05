import { Fragment } from "react";
import { useSelector } from "react-redux";
import AsideMenu from "../AsideMenu/AsideMenu";
import Post from "../Post/Post";
import classes from "./TemplateAllPosts.module.scss";

const TemplateAllPosts = props => {
    const posts = useSelector(store => store.posts);
    return (
        <Fragment>
            <AsideMenu className="card__home--aside-menu" />
            <div className={classes["templateAllPosts__post-list"]}>
                {
                    posts.map(post => <Post key={post.id} pageType={props.pageType} text={post.text} imageUrl={post.imageUrl} author={post.user} forum={post.forumId} id={post.id} comments={post.comments} />)
                }
            </div>
        </Fragment>
    )
}

export default TemplateAllPosts;