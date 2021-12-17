// 34, 35
import React from "react";
import ReactDOM from "react-dom";
import PrimeraApp from "./PrimeraApp";
import "./index.css";
import CounterApp from "./CounterApp";

// const h1Div = <h1>Hola mundo</h1>;
const divRoot = document.querySelector("#root");

ReactDOM.render(
  <div>
    <PrimeraApp saludo="un saludo por props" />
    <CounterApp value={23} />
  </div>,
  divRoot
);
