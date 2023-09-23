import { useState } from "react";

export const CounterApp = () => {
  const [counter, setcounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });
  const { counter1, counter2, counter3 } = counter;
  return (
    <>
      <h1>Counter</h1>
      <hr />
      <h2>Counter1: {counter1}</h2>
      <h2>Counter1: {counter2}</h2>
      <h2>Counter1: {counter3}</h2>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() =>
          setcounter({
            ...counter,
            counter1: counter1 + 1,
            counter2: counter2 + 2,
            counter3: counter3 + 3,
          })
        }
      >
        +1
      </button>
    </>
  );
};
