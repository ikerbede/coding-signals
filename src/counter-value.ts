import type { Signal } from './signal';

export function displayCounterValue(
  element: HTMLElement,
  counter: Signal<number>,
  doubleCounter: Signal<number>,
): void {
  element.innerHTML = `
      <h2>Valeur du compteur</h2> 
      <p id="counter_value">${counter.get()}</p>
      <p id="double_counter_value">${doubleCounter.get()}</p>
    `;
}
