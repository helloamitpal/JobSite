import React from 'react';
import ReactDOM from 'react-dom';

import App from './wrapper/App';
import * as serviceWorker from './serviceWorker';
import ErrorBoundary from './wrapper/ErrorBoundary';

import './index.css';

// Added error boundary to encounter any unwanted error cases
// hydrate function is used to make server side rendering
ReactDOM.hydrate(<ErrorBoundary><App /></ErrorBoundary>, document.getElementById('root'));

serviceWorker.unregister();
