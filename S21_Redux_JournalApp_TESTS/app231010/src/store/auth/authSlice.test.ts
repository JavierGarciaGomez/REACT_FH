import { describe, expect, it } from "vitest";
import { demoUser, initialAuthState } from "../../fixtures/authFxtures";
import { authSlice, checkingCredentials, login, logout } from ".";
import { AuthState } from "../../types/storeTypes";

describe("authSlice", () => {
  it("should return the initial state", () => {
    const state = authSlice.reducer(initialAuthState, { type: "" });

    expect(state).toEqual(initialAuthState);
    expect(authSlice.name).toBe("auth");
  });

  it("should handle login", () => {
    const state = authSlice.reducer(initialAuthState, login(demoUser));
    const expectedState: AuthState = {
      status: "authenticated",
      displayName: demoUser.displayName,
      uid: demoUser.uid,
      email: demoUser.email,
      photoURL: demoUser.photoURL,
      errorMessage: undefined,
    };
    expect(state).toEqual(expectedState);
  });

  it("should handle logout without arguments", () => {
    const state = authSlice.reducer(initialAuthState, logout());
    const expectedState: AuthState = {
      status: "not-authenticated",
    };
    expect(state).toEqual(expectedState);
  });

  it("should handle logout with an error message", () => {
    const errorMessage = "Something went wrong";
    const state = authSlice.reducer(
      initialAuthState,
      logout({ errorMessage: errorMessage })
    );
    const expectedState: AuthState = {
      status: "not-authenticated",
      errorMessage: errorMessage,
    };
    expect(state).toEqual(expectedState);
  });

  it('should change status to "checking"', () => {
    const state = authSlice.reducer(initialAuthState, checkingCredentials());
    expect(state.status).toBe("checking");
  });
});
