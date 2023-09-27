import { beforeEach, describe, expect, test, vi } from "vitest";
import { AuthContext } from "../../auth";
import * as ReactRouterDOM from "react-router-dom";
import { MemoryRouter } from "react-router-dom";
import { Navbar } from ".";
import { fireEvent, render, screen } from "@testing-library/react";

const mockedUseNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const mod: typeof ReactRouterDOM = await vi.importActual("react-router-dom");
  return {
    ...mod,
    useNavigate: () => mockedUseNavigate,
  };
});
describe("Tests on <Navbar />", () => {
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

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("should show user name", () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("JGG")).toBeTruthy();
  });

  test("should logout", () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const logoutBtn = screen.getByRole("button");
    fireEvent.click(logoutBtn);

    expect(contextValue.logout).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/login", { replace: true });
  });
});
