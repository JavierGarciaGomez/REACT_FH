import React from "react";

type Props = { value: number };

export const Small = React.memo(({ value }: Props) => {
  console.log("I was redrawn again :( ");

  return <small>{value}</small>;
});
