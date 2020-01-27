import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Layout from './views/Layout';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux'

import configureStore from './store';
import {loadState, saveState} from "./utils/localStorage";

const persistedState = loadState();
const store = configureStore(persistedState);

let timerId: any = null;
store.subscribe(() => {
    if (timerId != null) {
        clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
        saveState(store.getState());
    })
});

ReactDOM.render(<Provider store={store}><Router><Layout/></Router></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
