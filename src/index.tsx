import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/react';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

Sentry.init({dsn: "https://72f5f776373c4cfe899f6a64db92354b@o201206.ingest.sentry.io/5318561"});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
