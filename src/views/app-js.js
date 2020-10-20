import { main, div, h1, h2, input, pre, code, button } from '@hyperapp/html';
import * as firebase from 'firebase';
import { decodeNumberInput } from '/utils';
import { auth } from '/firebase';
import utils from '/styles/utils.css';

const provider = new firebase.auth.GoogleAuthProvider();

const oncreate = actions => () => {
  auth.onAuthStateChanged(user => {
    if (user) {
      actions.signedIn();
    } else {
      actions.signedOut();
    }
  });
};

const SignInBtn = () =>
  button({ onclick: () => auth.signInWithPopup(provider) }, 'Sign in');

const SignOutBtn = () => button({ onclick: () => auth.signOut() }, 'Sign out');

// Root application view
export default (state, actions) =>
  main({ class: utils.container, oncreate: oncreate(actions) }, [
    h1('Do more with less'),
    div({ class: utils.grid }, [
      input({
        type: 'number',
        value: state.a,
        oninput: event => actions.setA(decodeNumberInput(event)),
      }),
      input({
        type: 'number',
        value: state.b,
        oninput: event => actions.setB(decodeNumberInput(event)),
      }),
    ]),
    h2(`${state.a} + ${state.b} = ${state.a + state.b}`),
    pre({}, code(`state: ${JSON.stringify(state, null, 2)}`)),
    !state.auth ? SignInBtn() : SignOutBtn(),
  ]);
