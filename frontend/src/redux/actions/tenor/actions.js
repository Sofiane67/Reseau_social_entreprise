import { httpRequest } from "../../../utils/httpRequest"
import { GET_ALL_GIFS } from "./types";

export const getGifs = (keyword) => {
    return dispatch => {
        const response = httpRequest(`https://g.tenor.com/v1/search?q=${keyword}&key=${process.env.REACT_APP_KEY_API}&limit=50&local=fr_FR`,"GET");
        response().then(gifs => {
            dispatch({type: GET_ALL_GIFS, value:gifs.data.results});
        })
    }
}