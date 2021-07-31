import React from "react";
import PropTypes from "prop-types";
import { Fragment } from "react";

const PrimeraApp = ({ saludo, subtitulo }) => {
  return (
    <>
      <h1> Hola, soy {saludo} </h1>
      {/* <pre> {  JSON.stringify( saludo, null, 3 )  } </pre> */}
      <p> {subtitulo} </p>
    </>
  );
};

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};

PrimeraApp.defaultProps = {
  subtitulo: "Soy un subtitulo",
};

export default PrimeraApp;
