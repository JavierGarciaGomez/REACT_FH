// 204
import React from "react";
import { mount } from "enzyme";
import { AuthContext } from "../../auth/AuthContext";
import { DashboardRoutes } from "../../routers/DashboardRoutes";
import { MemoryRouter } from "react-router-dom";

describe("Pruebas en <DashboardRoutes/>", () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false,
      name: "JGG",
    },
  };
  test("debe mostrarse correctamente", () => {
    const wrapper = mount(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <DashboardRoutes />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".text-info").text().trim()).toBe("JGG");
  });
});
