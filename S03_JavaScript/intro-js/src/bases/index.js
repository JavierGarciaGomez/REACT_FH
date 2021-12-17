import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// 13 var y consts
const nombre = "Javier";
console.log(nombre);

// 16 arrays
let array1 = [1, 2, 3, 4];
let array2 = [...array1, 5];
console.log(array1);
console.log(array2);
console.log(nombre);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
