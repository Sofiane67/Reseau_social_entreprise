import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistoreFct} from "./redux/index";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistoreFct(store)}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
