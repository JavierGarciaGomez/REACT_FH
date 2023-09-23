import { BrowserRouter } from "react-router-dom";

import { MainApp } from "./MainApp";

export const UseContextPage = () => {
  return (
    <BrowserRouter>
      <h1>UseContextPage</h1>
      <MainApp />
    </BrowserRouter>
  );
};
