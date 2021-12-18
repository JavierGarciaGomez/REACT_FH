// 41, 42, 43

import { useState, Fragment } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  // 43 useState
  const [stateText, setStateText] = useState("texto del State");
  const [counter, setCounter] = useState(0);

  // 42 handleEvent
  const handleButton = (event) => {
    console.log(event);
    // 43
    setCounter(counter + 1);
  };

  return (
    <Fragment>
      <h1> l41. CounterApp</h1>
      <h2> {value} es el valor</h2>
      {/* 42 eventos */}
      <button id="boton" onClick={handleButton}>
        Botón
      </button>
      <p>43 texto del state: {stateText}</p>
      <p>43 número del counter: {counter}</p>
    </Fragment>
  );
};

// 39 validación de prototypes
CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
  defaultMsj: "Mensaje por default",
};
export default CounterApp;
