// let's go!
import React from 'react';
import { render } from 'react-dom';

import css from './styles/style.styl';

import App from './components/App.js';
import Single from './components/Single.js';
import PhotoGrid from './components/PhotoGrid.js';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';

import store, { history } from './store';

// using sentry
import Raven from 'raven-js';
import { sentry_url, logException } from './data/config';
//custom tag

// Raven.config(sentry_url {
//     tags: {
//         git_commit: 'commitsSomething',
//         userLevel: 'editor'
//     }
// }).install();

Raven.config(sentry_url).install();

// logException(new Error('download failed', {
//     email:
// }))


// Raven.captureMessage('something bad happened);
// Reaven.showReportDialog();



const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postid" component={Single}></Route>
            </Route>
        </Router>
    </Provider> 
    
)


render(router, document.getElementById('root'));
