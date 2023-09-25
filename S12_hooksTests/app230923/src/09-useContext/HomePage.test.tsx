import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { UserContext } from "./context/UserContext";
import { HomePage } from "./HomePage";
import { User } from "./types/types";

describe("HomePage", () => {
  const user: User = {
    id: 1,
    name: "JGG",
    email: "javier@mail.com",
  };

  test("renders with user name", () => {
    const setUserMock = vi.fn();
    render(
      <UserContext.Provider value={{ user: undefined, setUser: setUserMock }}>
        <HomePage />
      </UserContext.Provider>
    );
    screen.debug();

    const preTag = screen.getByLabelText("pre"); // aria-label
    console.log("xxx", preTag.innerHTML);
    expect(preTag.innerHTML).toBe("");
  });

  test("renders the user name", () => {
    const setUserMock = vi.fn();
    render(
      <UserContext.Provider value={{ user: user, setUser: setUserMock }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre"); // aria-label
    expect(preTag.innerHTML).toContain(user.name);
    expect(preTag.innerHTML).toContain(`${user.id}`);
  });
});
