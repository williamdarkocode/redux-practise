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

// create store

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
