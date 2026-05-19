import type { Signal } from "./signal";

export function displayCounterActions(
  element: HTMLElement,
  counter: Signal<number>,
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
    .addEventListener('click', () =>
      counter.update((value: number) => value + 1),
    );

  document
    .querySelector<HTMLButtonElement>('button#reset_btn')!
    .addEventListener('click', () => counter.set(0));
}
