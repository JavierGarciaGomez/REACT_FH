import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, test, vi } from "vitest";
import { AuthContext } from "../auth";
import { AppRouter } from ".";

describe("Tests on AppRouter component", () => {
  const contextValue = {
    authState: { logged: false },
    login: vi.fn(),
    logout: vi.fn(),
  };

  test("should show login if is not authenticated", () => {
    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    screen.debug();

    expect(screen.getAllByText("Login").length).toBe(2);
  });

  test("should show Marvel component if is authenticated", () => {
    const contextValue = {
      authState: {
        logged: true,
        user: {
          id: 123,
          email: "javi@mail.com",
          name: "JGG",
        },
      },
      login: vi.fn(),
      logout: vi.fn(),
    };

    render(
      <MemoryRouter initialEntries={["/login"]}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    screen.debug();

    expect(screen.getAllByText("Marvel").length).toBeGreaterThanOrEqual(1);
  });
});
