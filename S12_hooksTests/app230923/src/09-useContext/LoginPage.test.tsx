import { UserContext } from "./context/UserContext";
import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { LoginPage } from "./LoginPage";

describe("Tests <LoginPage/>", () => {
  const setUserMock = vi.fn();

  beforeEach(() => vi.clearAllMocks());
  test("should show component without the user", () => {
    render(
      <UserContext.Provider value={{ user: undefined, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );
    screen.debug();
    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("");
  });

  test("should call setuser", () => {
    render(
      <UserContext.Provider value={{ user: undefined, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const button = screen.getByLabelText("Set user");
    fireEvent.click(button);
    expect(setUserMock).toHaveBeenCalledWith({
      email: "juan@google.com",
      id: 123,
      name: "Juan",
    });
  });
});
