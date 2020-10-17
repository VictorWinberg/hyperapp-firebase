import { text } from 'hyperapp';
import { main, div, h1, h2, input, pre, code } from '@hyperapp/html';
import { SetA, SetB } from '/actions';
import { decodeNumberInput } from '/utils';
import utils from '/styles/utils.css';

// Root application view
export default state =>
  main({ class: utils.container }, [
    h1({}, [text('Do more with less')]),
    div({ class: utils.grid }, [
      input({
        type: 'number',
        value: state.a,
        oninput: [SetA, decodeNumberInput],
      }),
      input({
        type: 'number',
        value: state.b,
        oninput: [SetB, decodeNumberInput],
      }),
    ]),
    h2({}, [text(`${state.a} + ${state.b} = ${state.a + state.b}`)]),
    pre({}, [code({}, [text(`state: ${JSON.stringify(state, null, 2)}`)])]),
  ]);
