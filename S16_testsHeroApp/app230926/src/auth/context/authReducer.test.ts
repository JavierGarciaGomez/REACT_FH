import { describe, expect, it } from "vitest";
import { AuthActionTypes, LogoutAction } from "../../types/types";
import { authReducer } from ".";

describe("todoReducer", () => {
  it("should handle LOGIN action", () => {
    const initialState = { logged: false, user: undefined };
    const user = { id: 1, name: "John Doe", email: "john@example.com" };
    const action = { type: AuthActionTypes.LOGIN, payload: user };

    const newState = authReducer(initialState, action);

    expect(newState.logged).toBe(true);
    expect(newState.user).toEqual(user);
  });

  it("should handle LOGOUT action", () => {
    const initialState = {
      logged: true,
      user: { id: 1, name: "John Doe", email: "john@example.com" },
    };
    const action: LogoutAction = { type: AuthActionTypes.LOGOUT };

    const newState = authReducer(initialState, action);

    expect(newState.logged).toBe(false);
    expect(newState.user).toBeUndefined();
  });
});
