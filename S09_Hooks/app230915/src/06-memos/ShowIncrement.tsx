import React from "react";

type Props = { increment: (value: number) => void };

export const ShowIncrement = React.memo(({ increment }: Props) => {
  console.log(" Me volví a generar :( ");

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(5);
      }}
    >
      Incrementar
    </button>
  );
});
