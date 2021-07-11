import { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import FormPost from "../FormPost/FormPost";
import ButtonsModal from "../ButtonModal/ButtonsModal";
import Button from "../UI/Button/Button";
import TemplateAllPosts from "../TemplateAllPosts/TemplateAllPosts";
import { getAllPosts } from "../../redux/actions/posts/actions";
import { showModal } from "../../redux/actions/modal/actions";
import classes from "./Page.module.scss";


const Page = props => {

    const isSended = useSelector(store => store.formInputValue.isSend);
    const dispatch = useDispatch();
    const formInputValueStore = useSelector(store => store.formInputValue)
    const {forumId} = props;

    if (formInputValueStore.error) {
        delete formInputValueStore.error
    }

    useEffect(() => {
        if (!isSended) {
            dispatch(getAllPosts(forumId));
        }
    }, []);

    const showModaHandler = e => {
        dispatch(showModal({
            isShow: true,
            type: "post",
            sql: "insert",
            content: <FormPost forum={forumId} rowSize={props.rowSize}><ButtonsModal nameButton="Publier" /> </FormPost>
        }))
    };

    return (
        <Fragment>
            {forumId && (
                    <div className={classes["page__button"]}>
                        <Button onClick={showModaHandler}>Ajouter un post</Button>
                    </div>
            )}
            <TemplateAllPosts pageType={forumId} rowSize={props.rowSize}/>
        </Fragment>
    )
}

export default Page;