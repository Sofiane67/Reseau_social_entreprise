import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore } from 'redux-persist';
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools} from "redux-devtools-extension";
import {formInputValue} from "./reducers/form/reducers";

const persistConfig = {
    key: 'root',
    blacklist: ['formInputValue'],
    storage,
};

const reducers = () => combineReducers({
    formInputValue: formInputValue
});

const persistedReducer = persistReducer(persistConfig, reducers());

export const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export const persistoreFct = (store) => {
    return persistStore(store);
};