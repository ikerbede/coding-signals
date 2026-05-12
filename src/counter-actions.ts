import { Counter } from './counter.ts';

export function displayCounterActions(
  element: HTMLElement,
  counter: Counter
): void {
  element.innerHTML = `
    <h2>Actions on counter</h2>
    <ul>
      <li>
        <button type="button" id="increment_btn">Increment</button>
      </li>
      <li>
        <button type="button" id="reset_btn">Reset</button>
      </li>
    </ul>
  `;

  document
    .querySelector<HTMLButtonElement>('button#increment_btn')!
    .addEventListener('click', () => counter.increment());
  document
    .querySelector<HTMLButtonElement>('button#reset_btn')!
    .addEventListener('click', () => counter.reset());
}
