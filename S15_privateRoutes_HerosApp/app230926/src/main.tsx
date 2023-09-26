import React from "react";
import ReactDOM from "react-dom/client";
import { HerosApp } from "./HerosApp.tsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <HerosApp />
    </BrowserRouter>
  </React.StrictMode>
);
