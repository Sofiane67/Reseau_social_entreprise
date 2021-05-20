import {store} from "../redux/index";

const token = () => {
    const state = store.getState();
    return state.login.token;
}

export const setHeaders = () => {
    const headers = {
        'Content-Type': 'application/json'
    }
    if(token()){
        headers.Authorization = `Bearer ${token()}`;
    }

    return headers;
}
