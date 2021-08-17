import React from "react";
import ReactDOM from "react-dom";
import CounterApp from "./CounterApp";

import "./index.css";
import PrimeraApp from "./PrimeraApp";

const divRoot = document.querySelector("#app");

// ReactDOM.render(<PrimeraApp saludo="anónimo" />, divRoot);
ReactDOM.render(<CounterApp value={10} />, divRoot);
