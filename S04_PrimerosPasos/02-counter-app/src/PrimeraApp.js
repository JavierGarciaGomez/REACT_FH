// 35, 36, 37, 38, 39, 40

import { Fragment } from "react";
// 39
import PropTypes from "prop-types";

// Functional component
// const PrimeraApp = (props) => {
const PrimeraApp = ({ saludo, defaultMsj }) => {
  const variableString = "texto en variable";

  return (
    <Fragment>
      <h1> Mi {variableString}</h1>
      <p>un párrafo con {saludo}.</p>
      <p>40, esto es un mensaje por defecto: {defaultMsj}.</p>
    </Fragment>
  );
};

// 39 validación de proptypes
PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};

PrimeraApp.defaultProps = {
  defaultMsj: "Mensaje por default",
};
export default PrimeraApp;
