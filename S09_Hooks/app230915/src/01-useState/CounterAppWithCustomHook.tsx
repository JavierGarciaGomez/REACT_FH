import useCounter from "./hooks/useCounter";

export const CounterAppWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();
  const number = 10;

  return (
    <>
      <h1>CounterAppWithCustomHook</h1>
      <hr />
      <h2>{counter}</h2>
      <button onClick={() => increment(number)} className="btn btn-primary">
        +{number}
      </button>
      <button onClick={reset} className="btn btn-primary">
        Reset
      </button>
      <button onClick={() => decrement(number)} className="btn btn-primary">
        -{number}
      </button>
    </>
  );
};
