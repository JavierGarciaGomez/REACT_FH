import { useState } from "react";

const useCounter = (initialValue = 1) => {
  const [counter, setcounter] = useState(initialValue);

  const increment = (number = 1) => {
    setcounter((prev) => prev + number);
  };

  const decrement = (number = 1) => {
    setcounter((prev) => prev - number);
  };

  const reset = () => {
    setcounter(0);
  };

  return { counter, increment, decrement, reset };
};

export default useCounter;
