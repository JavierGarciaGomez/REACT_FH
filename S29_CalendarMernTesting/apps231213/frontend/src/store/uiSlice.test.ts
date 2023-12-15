import {
  authenticatedState,
  initialState,
} from "./../../tests/fixtures/authStates";
import { testUserCredentials } from "./../../tests/fixtures/testUser";

import { describe, expect, test } from "vitest";
import { authSlice, clearErrorMessage, onLogin, onLogout } from ".";

describe("AuthSlice", () => {
  test("debe de regresar el estado por defecto", () => {
    expect(authSlice.getInitialState()).toEqual(initialState);
  });

  test("debe de realizar un login", () => {
    const state = authSlice.reducer(initialState, onLogin(testUserCredentials));
    expect(state).toEqual({
      status: "authenticated",
      user: testUserCredentials,
      errorMessage: undefined,
    });
  });

  test("debe de realizar el logout", () => {
    const state = authSlice.reducer(authenticatedState, onLogout());
    expect(state).toEqual({
      status: "not-authenticated",
      user: undefined,
      errorMessage: undefined,
    });
  });

  test("Credenciales no válidas", () => {
    const errorMessage = "Credenciales no válidas";
    const state = authSlice.reducer(authenticatedState, onLogout(errorMessage));
    expect(state).toEqual({
      status: "not-authenticated",
      user: undefined,
      errorMessage: errorMessage,
    });
  });

  test("debe de limpiar el mensaje de error", () => {
    const errorMessage = "Credenciales no válidas";
    const state = authSlice.reducer(authenticatedState, onLogout(errorMessage));
    const newState = authSlice.reducer(state, clearErrorMessage());

    expect(newState.errorMessage).toBe(undefined);
  });
});
