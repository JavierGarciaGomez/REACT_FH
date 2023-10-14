import { Mock, beforeEach, describe, expect, test, vi } from "vitest";
import {
  checkingAuth,
  checkingCredentials,
  login,
  logout,
  startCreatingUserWithEmailPassword,
  startGoogleSignIn,
  startLoginWithEmailAndPassword,
  startLogout,
} from ".";
import { demoUser } from "../../fixtures/authFxtures";
import {
  loginWithEmailAndPassword,
  registerUserWithEmailPassword,
  singInWithGoogle,
} from "../../firebase/providers";
import { clearNotesLogout } from "../journal";

vi.mock("../../firebase/providers");

describe("AuthThunks", () => {
  const dispatch = vi.fn();
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("it should invoke checking credentials", async () => {
    await checkingAuth()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
  });

  test("startGoogleSignIn should be called with checkingCredentials and login -- success", async () => {
    const mockResult = { ok: true, ...demoUser };
    await (singInWithGoogle as Mock).mockResolvedValue(mockResult);

    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login({ ...demoUser }));
  });

  test("startGoogleSignIn should be called with checkingCredentials and logout -- error", async () => {
    const errorMessage = "Google error";
    const mockResult = { ok: false, errorMessage: errorMessage };
    await (singInWithGoogle as Mock).mockResolvedValue(mockResult);

    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(logout({ errorMessage }));
  });

  test("startCreatingUserWithEmailPassword should work properly", async () => {
    const mockResult = { ok: true, ...demoUser };
    await (registerUserWithEmailPassword as Mock).mockResolvedValue(mockResult);

    await startCreatingUserWithEmailPassword({
      displayName: demoUser.displayName,
      email: demoUser.email,
      password: "randomPassowrd",
    })(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login({ ...demoUser }));
  });

  test("startLoginWithEmailAndPassword", async () => {
    const mockResult = { ok: true, ...demoUser };
    await (loginWithEmailAndPassword as Mock).mockResolvedValueOnce(mockResult);
    await startLoginWithEmailAndPassword({
      email: demoUser.email,
      password: "password",
    })(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login({ ...demoUser }));
  });

  test("startLogout", async () => {
    await startLogout()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(clearNotesLogout());
    expect(dispatch).toHaveBeenCalledWith(logout());
  });
});
