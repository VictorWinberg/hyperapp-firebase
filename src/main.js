import { app } from 'hyperapp';

import state from '/state';
import * as actions from '/actions';
import view from '/views/app-jsx';
import '/styles/base.css';

// Initialize the app on the #app div
app(state, actions, view, document.getElementById('app'));

// Enable the service worker when running the build command
// if (process.env.NODE_ENV === 'production') {
//   navigator.serviceWorker.register(`${window.location.origin}/sw.js`)
// }
