import { SetA, SetB } from '/actions';
import { decodeNumberInput } from '/utils';
import utils from '/styles/utils.css';

const withPayload = filter => (_, x) => filter(x);

// Root application view
export default state => (
  <main class={utils.container}>
    <h1>Do more with less</h1>
    <div className={utils.grid}>
      <input
        type="number"
        value={state.a}
        oninput={withPayload(event => [SetA, decodeNumberInput(event)])}
      />
      <input
        type="number"
        value={state.b}
        oninput={withPayload(event => [SetB, decodeNumberInput(event)])}
      />
    </div>
    <h2>
      {state.a} + {state.b} = {state.a + state.b}
    </h2>
    <pre>
      <code>state: {JSON.stringify(state, null, 2)}</code>
    </pre>
  </main>
);
