import {store} from "../redux"

const isLoggedIn = () => {
    const state = store.getState();
    console.log("STORE",state)
    return state.login.isLoggedIn;
}

export const requireLogin = (to, from, next) => {
    console.log("requireLogin function",to.meta.auth);
    if (to.meta.auth) {
        if (isLoggedIn()) {
            next();
        }
        next.redirect("/login")
    } else {
        next.redirect("/")
        next();
    }
}