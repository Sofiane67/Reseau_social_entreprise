import { httpRequest } from "../../../utils/httpRequest";
import { GET_USER_DATA } from "./types";
export const getUserProfil = userId =>{
    return dispatch => {
        const response = httpRequest(`http://localhost:3000/api/auth/${userId}`, "GET");
        response().then(user => {
            const {data} = user;
            dispatch({
                type: GET_USER_DATA,
                value: data
            })
        })
    }
}