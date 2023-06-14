import { MouseEvent, useState } from "react";

type Props = { value: number };

export const App = ({ value }: Props) => {
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
