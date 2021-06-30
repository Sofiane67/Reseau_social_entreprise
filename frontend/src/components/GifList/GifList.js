import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_POST_IMAGE } from "../../redux/actions/form/type";
import {getGifs} from "../../redux/actions/tenor/actions";
import classes from "./GifList.module.scss";


const GifList = () => {

    const dispatch = useDispatch();
    const tenor = useSelector(store => store.tenor);
    const [gifUrl, setGifUrl] = useState();
    const [search, setSearch] = useState("");

    useEffect(() => {
        dispatch(getGifs(search));
    }, [search]);

    const searchHandler = e => {
        setSearch(e.target.value);
    }

    const getSrcUrlHandler = e => {
        setGifUrl(e.target.currentSrc);
        dispatch({ type: GET_POST_IMAGE, value: e.target.currentSrc });
    }

    return(
        <div className={`${classes["gif"]}`}>
            <div className={classes["gif__search-group"]}>
                <label htmlFor="search-gif" className={classes["gif__label"]}>Rechercher :</label>
                <input id='search-gif' type="text" onChange={searchHandler} placeholder="Rechercher un gif" className={classes["gif__input"]} />
            </div>

            <div className={classes["gif__content"]}>
                {tenor.map(gif => <div key={gif.id} className={classes["gif__img-box"]}><img className={classes["gif__img"]} src={gif.media[0].tinygif.url} onClick={getSrcUrlHandler} /></div>)}
            </div>
            {gifUrl && <div className={classes["gif__preview"]}><img className={classes["gif__preview-img"]} src={gifUrl} /></div>}
        </div>
    )
}

export default GifList;