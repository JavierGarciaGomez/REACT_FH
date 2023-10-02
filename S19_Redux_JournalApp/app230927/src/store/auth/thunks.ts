import { Dispatch } from "redux";
import { RootState } from "..";
import { checkingCredentials, login, logout } from ".";
import { singInWithGoogle } from "../../firebase/providers";

export const checkingAuth = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    dispatch(checkingCredentials());
    console.log({ email, password, getState, dispatch });
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
