// 113
import React, { useRef } from "react";
import "../styles.css";

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    // document.querySelector('#input113').focus()
    inputRef.current.focus();
  };

  return (
    <div>
      <h3>113. Use Ref. Focus screen</h3>
      <p>
        Al hacer click en el botón, se hace focus en el input, el cual es
        convocado con useRef
      </p>
      <hr></hr>
      <input
        ref={inputRef}
        type="text"
        className="form-control"
        placeholder="Su nombre"
        id="input113"
      />
      <button
        className="btn btn-outline-primary mt-5"
        id="btn113"
        onClick={handleClick}
      >
        Botón
      </button>

      <hr></hr>
    </div>
  );
};
