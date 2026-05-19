import { createSignal, type Signal, type Subscriber } from './signal';

let context: { newSubscriber: Subscriber | null } = { newSubscriber: null };

export function signal(initialValue: number): Signal<number> {
  return createSignal<number>(initialValue, context);
}

export function effect(fn: Subscriber): void {
  context.newSubscriber = fn;
  fn();
  context.newSubscriber = null;
}

export function computed(fn: () => number): Signal<number> {
  const sig = signal(0);
  effect(() => sig.set(fn()));
  return sig;
}
