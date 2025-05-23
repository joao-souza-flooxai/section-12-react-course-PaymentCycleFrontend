import React from 'react';
import promise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './main/app';
import reducers from './main/reducers';
import multi from "redux-multi";
import thunk from  "redux-thunk"

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = applyMiddleware(multi,thunk,promise)(createStore)(reducers, devTools);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);