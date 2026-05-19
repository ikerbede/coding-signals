export type Subscriber = () => unknown;

export type Signal<T> = {
  get: () => T;
  set: (value: T) => void;
  update: (updateFn: (currentValue: T) => T) => void;
};

export function createSignal<T>(
  initialValue: T,
  context: { newSubscriber: Subscriber | null },
): Signal<T> {
  let _value: T = initialValue;
  const _subscribers: Set<Subscriber> = new Set();

  return {
    get: () => {
      if (context.newSubscriber) {
        _subscribers.add(context.newSubscriber);
      }
      return _value;
    },
    set: (value: T) => {
      _value = value;
      _subscribers.forEach((subscriber) => subscriber());
    },
    update: (updateFn: (currentValue: T) => T) => {
      _value = updateFn(_value);
      _subscribers.forEach((subscriber) => subscriber());
    },
  };
}
