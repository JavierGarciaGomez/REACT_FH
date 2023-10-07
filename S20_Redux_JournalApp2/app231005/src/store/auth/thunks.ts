import { Dispatch } from "redux";
import { checkingCredentials, login, logout } from ".";
import {
  loginWithEmailAndPassword,
  logoutFirebase,
  registerUserWithEmailPassword,
  singInWithGoogle,
} from "../../firebase/providers";
import { AuthUser } from "../../types/storeTypes";

export const checkingAuth = () => {
  return async (dispatch: Dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch: Dispatch) => {
    dispatch(checkingCredentials());
    const result = await singInWithGoogle();
    console.log({ result });
    if (!result.ok) {
      return dispatch(logout({ errorMessage: result.errorMessage! }));
    }

    const { displayName, email, photoURL, uid } = result;

    dispatch(
      login({
        displayName: displayName!,
        email: email!,
        photoURL: photoURL!,
        uid: uid!,
      })
    );
  };
};

type StartCreatingUserWithEmailPasswordArgs = {
  email: string;
  password: string;
  displayName: string;
};
export const startCreatingUserWithEmailPassword = ({
  email,
  password,
  displayName,
}: StartCreatingUserWithEmailPasswordArgs) => {
  return async (dispatch: Dispatch) => {
    dispatch(checkingCredentials());
    const result = await registerUserWithEmailPassword({
      displayName,
      email,
      password,
    });
    if (!result.ok) {
      return dispatch(logout({ errorMessage: result.errorMessage! }));
    }

    const loginData: AuthUser = {
      uid: result.uid!,
      email: result.email!,
      displayName: result.displayName!,
      photoURL: result.photoURL!,
    };

    dispatch(login(loginData));
  };
};

type startLoginWithEmailAndPasswordArgs = {
  email: string;
  password: string;
};
export const startLoginWithEmailAndPassword = ({
  email,
  password,
}: startLoginWithEmailAndPasswordArgs) => {
  return async (dispatch: Dispatch) => {
    dispatch(checkingCredentials());
    const result = await loginWithEmailAndPassword({ email, password });
    if (!result.ok) {
      return dispatch(logout({ errorMessage: result.errorMessage! }));
    }
    const loginData: AuthUser = {
      uid: result.uid!,
      email: result.email!,
      displayName: result.displayName!,
      photoURL: result.photoURL!,
    };

    dispatch(login(loginData));
  };
};

export const startLogout = () => {
  return async (dispatch: Dispatch) => {
    await logoutFirebase();
    dispatch(logout({ errorMessage: "logout" }));
  };
};
