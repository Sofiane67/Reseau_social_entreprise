import { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import FormPost from "../FormPost/FormPost";
import ButtonsModal from "../ButtonModal/ButtonsModal";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import TemplateAllPosts from "../TemplateAllPosts/TemplateAllPosts";
import { getAllPosts } from "../../redux/actions/posts/actions";
import { showModal } from "../../redux/actions/modal/actions";



const Page = props => {

    const isSended = useSelector(state => state.formInputValue.isSend);
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
                <Card className="card__home--form">
                    <Button onClick={showModaHandler}>Ajouter un post</Button>
                </Card>
            )}
            <TemplateAllPosts />
        </Fragment>
    )
}

export default Page;