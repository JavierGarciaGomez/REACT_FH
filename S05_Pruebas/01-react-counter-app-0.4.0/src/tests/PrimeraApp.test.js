// 58, 59
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import React, { Fragment } from "react";
import { shallow } from "enzyme";

describe("pruebas en <Primera App>", () => {
  test("debe retornar el saludo ", async () => {
    const saludo = "Hola, soy anónimo";
    const wrapper = render(<PrimeraApp saludo={"anónimo"} />);

    expect(wrapper.getByText(saludo)).toBeInTheDocument();
  });

  //   Pruebas enzyme
  test("debe mostrar <PrimeraApp> ", async () => {
    const saludo = "Hola, soy anónimo";
    const wrapper = shallow(<PrimeraApp saludo={"anónimo"} />);
    // expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar el subtítulo ", async () => {
    const saludo = "Hola, soy anónimo";
    const subtitulo = "Soy un subtítulo";
    const wrapper = shallow(
      <PrimeraApp saludo={"anónimo"} subtitulo={subtitulo} />
    );

    const textoParrafo = wrapper.find("p").text();
    console.log(textoParrafo);
    // expect(textoParrafo).toBe(subtitulo);
  });
});
