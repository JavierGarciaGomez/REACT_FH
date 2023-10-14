import { configureStore } from "@reduxjs/toolkit";

import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { authSlice } from "../../store/auth";
import { MemoryRouter } from "react-router-dom";

import { LoginPage } from ".";
import { notAuthenticatedAuthState } from "../../fixtures/authFxtures";
import * as ReactRedux from "react-redux";

const mockStartGoogleSignIn = vi.fn();
const mockStartLoginWithEmailPassword = vi.fn();

vi.mock("../../store/auth/thunks", () => ({
  startGoogleSignIn: () => mockStartGoogleSignIn,
  startLoginWithEmailAndPassword: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    return () => mockStartLoginWithEmailPassword({ email, password });
  },
}));

vi.mock("react-redux", async () => {
  const mod: typeof ReactRedux = await vi.importActual("react-redux");
  return {
    ...mod,
    useDispatch: () => (fn: () => void) => fn(),
  };
});

export const store = configureStore({
  reducer: {
    authReducer: authSlice.reducer,
  },
  preloadedState: {
    authReducer: notAuthenticatedAuthState,
  },
});

describe("LoginPage", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  it("should show component correctly", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getAllByText("Login").length).toBeGreaterThanOrEqual(1);
  });

  it("should start google sign in", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );
    const googleBtn = screen.getByLabelText("google-btn");
    fireEvent.click(googleBtn);

    expect(mockStartGoogleSignIn).toHaveBeenCalled();
  });

  it.only("should call startLoginWithEmailPassword", () => {
    const email = "test@mail.com";
    const password = "123456";
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );
    const emailField = screen.getByRole("textbox", { name: "Email" });
    fireEvent.change(emailField, { target: { name: "email", value: email } });

    const passwordField = screen.getByTestId("password");
    fireEvent.change(passwordField, {
      target: { name: "password", value: password },
    });

    const loginForm = screen.getByLabelText("submit-form");
    fireEvent.submit(loginForm);

    expect(mockStartLoginWithEmailPassword).toHaveBeenCalledWith({
      email: email,
      password: password,
    });
  });
});
