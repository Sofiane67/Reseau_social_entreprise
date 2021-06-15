import { Fragment, useEffect, memo} from "react";
import {useDispatch, useSelector} from  "react-redux";
import Card from "../../components/UI/Card/Card";
import FormPost from "../../components/FormPost/FormPost";
import ButtonsModal from "../../components/ButtonModal/ButtonsModal";
import Button from "../../components/UI/Button/Button";
import Post from "../../components/Post/Post";
import AsideMenu from "../../components/AsideMenu/AsideMenu";
import {getAllPosts} from "../../redux/actions/posts/actions";
import classes from "./Home.module.scss";
import {showModal} from "../../redux/actions/modal/actions";


const Home = () => { 
    const isSended = useSelector(state => state.formInputValue.isSend);
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);

    useEffect(() => {
        if(!isSended){
            dispatch(getAllPosts());
        }   
    },[]);

    const showModaHandler = e => {
        console.log(e.target.name)
        dispatch(showModal({
            isShow: true,
            type: "post",
            sql: "insert",
            message: <FormPost><ButtonsModal nameButton="Publier" /> </FormPost>
        }))
    };

    return (
        <Fragment>
            <Card className="card__home--form">
                <Button onClick={showModaHandler}>Ajouter un post</Button>
            </Card>
            <AsideMenu className="card__home--aside-menu"/>
            <div className={classes["home__post-list"]}>
                {
                    posts.map(post => <Post key={post.id} text={post.text} imageUrl={post.imageUrl} author={post.user} forum={post.forumId} id={post.id}/>)
                }
            </div>
        </Fragment>
    )
};

export default memo(Home);
