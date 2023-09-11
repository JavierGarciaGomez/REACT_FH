import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles.css";
import { FirstApp } from "./FirstApp.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FirstApp title={"a Title"} subtitle={"a subtitle"} name={"a na,e"} />
    <App />
  </React.StrictMode>
);
