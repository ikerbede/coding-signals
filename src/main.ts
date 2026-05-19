import { displayCounterActions } from './counter-actions.ts';
import { displayCounterValue } from './counter-value.ts';
import { Observable } from './observable.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Implement signals</h1>
<section id="counter_actions"></section>
<section id="counter_value"></section>
`;

const counter = new Observable<number>(0);

displayCounterActions(
  document.querySelector<HTMLElement>('section#counter_actions')!,
  counter,
);

const updateValue = (count: number) =>
  displayCounterValue(
    document.querySelector<HTMLElement>('section#counter_value')!,
    count,
  );

counter.subscribe((value: number) => updateValue(value));
