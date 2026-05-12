import { Counter } from './counter.ts';

export function displayCounterValue(
  element: HTMLElement,
  counter: Counter
): void {
  element.innerHTML = `
      <h2>Valeur du compteur</h2> 
      <p id="counter_value">${counter.value}</p>
    `;
}
