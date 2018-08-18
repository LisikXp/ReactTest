import React from 'react';
import ReactDOM from 'react-dom';
import  {Provider} from 'react-redux'
import App from './App'
import { fetchAllPosts } from './actions/index';
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers';
const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(fetchAllPosts(0, 10));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

