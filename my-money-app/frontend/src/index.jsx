import React from 'react';
import promise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './main/app';
import reducers from './main/reducers';

const store = applyMiddleware(promise)(createStore)(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);