// 203
import React from "react";
import { AppRouter } from "../../routers/AppRouter";
import { mount } from "enzyme";
import { AuthContext } from "../../auth/AuthContext";

describe("Pruebas en <AppRouter/>", () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false,
    },
  };
  test("debe mostrar login si no está auténticado", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );
    console.log(wrapper.html());
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar el componente de Marvel si está auténticado", () => {
    const contextValue = {
      dispatch: jest.fn(),
      user: {
        logged: true,
        name: "JGG",
      },
    };
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper.find(".navbar").exists()).toBe(true);
    // expect(wrapper).toMatchSnapshot();
  });
});
