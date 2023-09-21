import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  console.log({ inputRef });

  const onClick = () => {
    // const inputElement = document.getElementById(
    //   "focusScreenId"
    // ) as HTMLInputElement;
    // inputElement.select();
    inputRef.current?.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <div>FocusScreen</div>
      <hr />
      <input
        ref={inputRef}
        type="text"
        placeholder=""
        className="form-control"
        id="focusScreenId"
      />
      <button className="btn btn-primary mt-2" onClick={onClick}>
        Set focus
      </button>
    </>
  );
};
