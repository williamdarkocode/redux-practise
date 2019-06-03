import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';

import { browserHistory } from 'react-router';

// import root reducer
import rootReducer from './reducers/index';

// default data
import comments from './data/comments.js';
import posts from './data/posts.js'


//create obj for default data

const defaultState = {
    posts: posts,
    comments, comments
};

const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

// create store

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

// hotloading reudcers bebe! ;).... heheh im so fucking wierd ye have no idea lool

// check if module is hot
if(module.hot) {
    module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;
