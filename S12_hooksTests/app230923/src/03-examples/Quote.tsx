import { RefObject, useLayoutEffect, useRef, useState } from "react";

type Props = {
  title: string;
  body: string;
};
export const Quote = ({ body, title }: Props) => {
  const pRef: RefObject<HTMLParagraphElement> = useRef(null);
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (pRef.current) {
      console.log(pRef.current.getBoundingClientRect());
      const { height, width } = pRef.current.getBoundingClientRect();
      setBoxSize({ height, width });
    }
  }, [title]);

  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: "flex" }}>
        <p ref={pRef} className="mb-1">
          {title}
        </p>
        <footer className="blockquote-footer">{body?.slice(0, 20)}</footer>
      </blockquote>

      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};
