export function displayCounterValue(element: HTMLElement, count: number): void {
  element.innerHTML = `
      <h2>Valeur du compteur</h2> 
      <p id="counter_value">${count}</p>
    `;
}
