import React from "react";

type Props = {
  number: number;
  increment: (value: number) => void;
};

export const Hijo = React.memo(({ number, increment }: Props) => {
  console.log("  Me volví a generar :(  ");

  return (
    <button className="btn btn-primary mr-3" onClick={() => increment(number)}>
      {number}
    </button>
  );
});
