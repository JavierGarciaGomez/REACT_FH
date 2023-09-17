import { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 }); // Initialize with default values

  useEffect(() => {
    const onMouseMove = ({ x, y }: MouseEvent) => {
      setCoords({ x, y });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <div>User already exists</div>
      {JSON.stringify(coords)}
    </>
  );
};
