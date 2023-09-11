import React from "react";
import ReactDOM from "react-dom/client";
import { GifExpertApp } from "./GifExpertApp.tsx";
import "./index.css";

const apikey = import.meta.env.VITE_GiphyApiKey;

console.log({ apikey });

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <GifExpertApp />
  // </React.StrictMode>
);
