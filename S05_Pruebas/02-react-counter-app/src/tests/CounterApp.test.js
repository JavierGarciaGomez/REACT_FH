// 61, 62
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React, { Fragment } from "react";
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("pruebas en <Counter App>", () => {
  let wrapper = shallow(<CounterApp />);
  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("debe mostrar <CounterApp> ", async () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar <CounterApp> valor default 100 ", async () => {
    let value = 100;
    wrapper = shallow(<CounterApp value={100} />);
    const counterText = wrapper.find("h2").text().trim();

    expect(counterText).toBe(value.toString());
  });

  test("Probar botón incrementar ", async () => {
    wrapper.find("button").at(0).simulate("click", {});
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe("11");
  });

  test("Probar botón decrementar ", async () => {
    wrapper.find("button").at(2).simulate("click", {});
    const counterText = wrapper.find("h2").text().trim();
    console.log(counterText);
    expect(counterText).toBe("9");
  });

  test("Colocar el valor por defecto con btn reset ", async () => {
    const wrapper = shallow(<CounterApp value={105} />);

    wrapper.find("button").at(0).simulate("click", {});
    wrapper.find("button").at(0).simulate("click", {});
    wrapper.find("button").at(1).simulate("click", {});
    let counterText = wrapper.find("h2").text().trim();
    console.log(counterText);
    counterText = wrapper.find("h2").text().trim();

    expect(counterText).toBe("105");
  });
});
