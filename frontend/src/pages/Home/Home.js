import { Fragment, useEffect, memo} from "react";
import {useDispatch, useSelector} from  "react-redux";
import Card from "../../components/UI/Card/Card";
import FormPost from "../../components/FormPost/FormPost";
import Post from "../../components/Post/Post";
import AsideMenu from "../../components/AsideMenu/AsideMenu";
import {getAllPosts} from "../../redux/actions/posts/actions";
import classes from "./Home.module.scss";


const Home = () => { 
    const isSended = useSelector(state => state.formInputValue.isSend);
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);

    useEffect(() => {
        if(!isSended){
            dispatch(getAllPosts());
        }   
    },[]);

    console.log(posts)

    return (
        <Fragment>
            <Card className="card__home--form">
                <FormPost />
            </Card>
            <AsideMenu className="card__home--aside-menu"/>
            <div className={classes["home__post-list"]}>
                {
                    posts.map((post, index) => <Post key={index} text={post.text} imageUrl={post.imageUrl} author={post.user}/>)
                }
            </div>
        </Fragment>
    )
};

export default memo(Home);
