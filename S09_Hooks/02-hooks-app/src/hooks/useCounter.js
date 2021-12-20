import { useState } from "react";

export const useCounter = (initialState = 10) => {
  const [counter, setstate] = useState(initialState);

  const increment = () => {
    setstate(counter + 1);
  };

  const decrement = () => {
    setstate(counter - 1);
  };

  const changeFactor = (factor = 1) => {
    setstate(counter + factor);
  };

  const reset = () => {
    setstate(initialState);
  };

  return {
    state: counter,
    changeFactor,

    increment,
    decrement,
    reset,
  };
};
