import { Fragment, useEffect, useState, useCallback} from "react";
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
    },[dispatch, isSended]);

    return (
        <Fragment>
            <Card>
                <FormPost />
            </Card>
            <section className={classes.home}>
                <AsideMenu className={classes["home__aside--left"]}/>
                <div className={classes["home__post-list"]}>
                    {
                        posts.map((post, index) => <Post key={index} text={post.text} imageUrl={post.imageUrl}/>)
                    }
                </div>
                <div>ASIDE RIGTH</div>
            </section>
        </Fragment>
    )
};

export default Home;
