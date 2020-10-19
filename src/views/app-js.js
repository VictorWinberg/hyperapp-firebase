import { text } from 'hyperapp';
import { main, div, h1, h2, input, pre, code, button } from '@hyperapp/html';
import * as firebase from 'firebase';
import { SetA, SetB } from '/actions';
import { decodeNumberInput } from '/utils';
import { auth } from '/firebase';
import utils from '/styles/utils.css';

const provider = new firebase.auth.GoogleAuthProvider();
const withPayload = filter => (_, x) => filter(x);

const SignInBtn = button(
  { onclick: state => [state, [() => auth.signInWithPopup(provider)]] },
  [text('Sign in')]
);

const SignOutBtn = button(
  { onclick: state => [state, [() => auth.signOut()]] },
  [text('Sign out')]
);

// Root application view
export default state =>
  main({ class: utils.container }, [
    h1({}, [text('Do more with less')]),
    div({ class: utils.grid }, [
      input({
        type: 'number',
        value: state.a,
        oninput: withPayload(event => [SetA, decodeNumberInput(event)]),
      }),
      input({
        type: 'number',
        value: state.b,
        oninput: withPayload(event => [SetB, decodeNumberInput(event)]),
      }),
    ]),
    h2({}, [text(`${state.a} + ${state.b} = ${state.a + state.b}`)]),
    pre({}, [code({}, [text(`state: ${JSON.stringify(state, null, 2)}`)])]),
    !state.auth ? SignInBtn : SignOutBtn,
  ]);
