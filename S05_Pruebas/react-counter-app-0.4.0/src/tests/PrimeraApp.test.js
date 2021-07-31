// 58
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import React, { Fragment } from "react";

describe("pruebas en <Primera App>", () => {
  test("debe retornar el saludo ", async () => {
    const saludo = "Hola, soy anónimo";
    const wrapper = render(<PrimeraApp saludo={"anónimo"} />);

    expect(wrapper.getByText(saludo)).toBeInTheDocument();
  });
});
