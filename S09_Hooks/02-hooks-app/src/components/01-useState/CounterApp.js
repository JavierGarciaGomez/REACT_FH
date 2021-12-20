// 105
import React, { useState } from "react";
import "./counter.css";

export const CounterApp = () => {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2 } = state;

  console.log("105 state", state);

  return (
    <>
      <h2>105</h2>
      <h2>Counter1 {counter1}</h2>
      <h2>Counter2 {counter2}</h2>
      {/* <h1> Counter {{counter}}</h1>    */}

      <button
        className="btn btn-primary"
        onClick={() => {
          setState({
            ...state,
            counter1: counter1 + 1,
            counter2: counter2 - 1,
          });
        }}
      >
        +1
      </button>
    </>
  );
};
