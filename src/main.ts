import { Counter } from './counter.ts';
import { displayCounterActions } from './counter-actions.ts';
import { displayCounterValue } from './counter-value.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Implement signals</h1>
<section id="counter_actions"></section>
<section id="counter_value"></section>
<button style="display: none" type="button" id="update_btn">Update value</button>
`;

const counter = new Counter();

displayCounterActions(
  document.querySelector<HTMLElement>('section#counter_actions')!,
  counter
);

displayCounterValue(
  document.querySelector<HTMLElement>('section#counter_value')!,
  counter
);

/*
const updateValue = () =>
  displayCounterValue(
    document.querySelector<HTMLElement>('section#counter_value')!,
    counter
  );

updateValue();

document
  .querySelector<HTMLButtonElement>('button#update_btn')!
  .addEventListener('click', () => updateValue());
*/
