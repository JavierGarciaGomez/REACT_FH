import { render } from "@testing-library/react";
import { AuthContext } from "../auth";

import { describe, expect, test, vi } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { PrivateRoute } from ".";

describe("PublicRoute Component", () => {
  test("should navigate if is not authenticated", () => {
    const contextValue = {
      authState: { logged: false },
      login: vi.fn(),
      logout: vi.fn(),
    };
    const { getByText } = render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/marvel"]}>
          <Routes>
            <Route
              path="marvel"
              element={
                <PrivateRoute>
                  <div>Private component</div>
                </PrivateRoute>
              }
            />
            <Route path="login" element={<div>Public component</div>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const childComponent = getByText("Public component");
    expect(childComponent).toBeTruthy;
  });

  test("should show the children if is authenticated", () => {
    Storage.prototype.setItem = vi.fn();
    const contextValue = {
      authState: {
        logged: true,
        user: {
          name: "JGG",
          email: "javi@mail.com",
          id: 123,
        },
      },
      login: vi.fn(),
      logout: vi.fn(),
    };
    const { getByText } = render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/search?q=batman"]}>
          <PrivateRoute>
            <h1>Private route</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(getByText("Private route")).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "lastPath",
      "/search?q=batman"
    );
  });
});
