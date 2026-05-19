type Subscriber<T> = (newValue: T) => unknown;
type Subscription = { unsubscribe: () => boolean };

export class Observable<T> {
  private _value: T;
  private _subscribers: Set<Subscriber<T>> = new Set();

  constructor(initialValue: T) {
    this._value = initialValue;
  }

  set(value: T) {
    this._value = value;
    this._subscribers.forEach((subscriber) => subscriber(this._value));
  }

  update(updateFn: (currentValue: T) => T) {
    this._value = updateFn(this._value);
    this._subscribers.forEach((subscriber) => subscriber(this._value));
  }

  subscribe(subscriber: Subscriber<T>): Subscription {
    this._subscribers.add(subscriber);
    return {
      unsubscribe: () => this._subscribers.delete(subscriber),
    };
  }
}
