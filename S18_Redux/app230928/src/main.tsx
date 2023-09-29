import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";

import { store } from "./store/store.ts";
import { PokemonApp } from "./PokemonApp.tsx";
import { App } from "./App.tsx";

const showPokemon = true;
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      {showPokemon && <PokemonApp />}
      {!showPokemon && <App />}
    </Provider>
    ,
  </React.StrictMode>
);
