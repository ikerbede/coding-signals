import { displayCounterActions } from './counter-actions.ts';
import { displayCounterValue } from './counter-value.ts';
import { computed, effect, signal } from './context.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Implement signals</h1>
<section id="counter_actions"></section>
<section id="counter_value"></section>
`;

const counter = signal(0);
const doubleCounter = computed(() => counter.get() * 2);

displayCounterActions(
  document.querySelector<HTMLElement>('section#counter_actions')!,
  counter,
);

effect(() =>
  displayCounterValue(
    document.querySelector<HTMLElement>('section#counter_value')!,
    counter,
    doubleCounter
  ),
);
