import { app } from 'hyperapp';

import { auth } from '/firebase';
import state from '/state';
import view from '/views/app-js';
import '/styles/base.css';

const AuthSubscription = dispatch => {
  auth.onAuthStateChanged(user => {
    if (user) {
      dispatch(state => ({ ...state, auth: true }));
    } else {
      dispatch(state => ({ ...state, auth: false }));
    }
  });
};

// Initialize the app on the #app div
app({
  init: state,
  view,
  subscriptions: () => [[AuthSubscription]],
  node: document.getElementById('app'),
});

// Enable the service worker when running the build command
// if (process.env.NODE_ENV === 'production') {
//   navigator.serviceWorker.register(`${window.location.origin}/sw.js`)
// }
