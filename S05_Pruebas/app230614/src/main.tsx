import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./styles.css";
import React from "react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App value={100}></App>
  </React.StrictMode>
);
