import { createSignal } from "solid-js";

export default function() {

  const [count, setCount] = createSignal(0);
  return <div onclick={() => setCount(count() + 1)}>
    This is a reactive island component {count()}
  </div>;
}
