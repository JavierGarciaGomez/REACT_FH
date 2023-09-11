import { useState } from "react";

type Props = { value?: number };

const App = ({ value = 100 }: Props) => {
  const handleAdd = (): void => {
    setcount((value) => value + 1);
  };

  const handleSubtract = (): void => {
    setcount((value) => value - 1);
  };

  const handleReset = (): void => {
    setcount(value);
  };

  const [count, setcount] = useState<number>(value);

  return (
    <>
      <h1>{count}</h1>
      <div>DIV</div>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubtract}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default App;
