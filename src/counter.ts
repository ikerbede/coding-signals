export class Counter {
  private _counter = 0;

  increment(): void {
    this._counter++;
  }

  setValue(value: number): void {
    this._counter = value;
  }

  reset(): void {
    this.setValue(0);
  }

  get value(): number {
    return this._counter;
  }
}
