import storage from "redux-persist/lib/storage";
import {createMigrate, persistReducer, persistStore } from 'redux-persist';
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools} from "redux-devtools-extension";
import {formInputValue} from "./reducers/form/reducers";
import {login} from "./reducers/login/reducers";

const migrations = {
    1: state => ({
        ...state
    })
}

const persistConfig = {
    key: 'root',
    blacklist: ['formInputValue'],
    storage,
    version: 1,
    migrate: createMigrate(migrations, {debug: true})
};

const reducers = () => combineReducers({
    formInputValue: formInputValue,
    login: login
});

const persistedReducer = persistReducer(persistConfig, reducers());

export const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export const persistoreFct = (store) => {
    return persistStore(store);
};