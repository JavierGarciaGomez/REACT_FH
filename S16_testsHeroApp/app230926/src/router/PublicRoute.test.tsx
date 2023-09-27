import { render, screen } from "@testing-library/react";
import { AuthContext } from "../auth";
import { PublicRoute } from "./PublicRoute";
import { describe, expect, test, vi } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("PublicRoute Component", () => {
  test("should show children if is not authenticated", () => {
    const contextValue = {
      authState: { logged: false },
      login: vi.fn(),
      logout: vi.fn(),
    };
    const { getByText } = render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <div>Child Component</div>
        </PublicRoute>
      </AuthContext.Provider>
    );

    const childComponent = getByText("Child Component");
    expect(childComponent).toBeTruthy;
  });

  test("should navigate if is authenticated", () => {
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
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route
              path="login"
              element={
                <PublicRoute>
                  <div>Child Component</div>
                </PublicRoute>
              }
            />
            <Route path="marvel" element={<h1>Marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const childComponent = screen.queryByText("Child Component");
    expect(childComponent).toBeFalsy();
    const marvelComponent = getByText("Marvel");
    expect(marvelComponent).toBeTruthy();
  });
});
