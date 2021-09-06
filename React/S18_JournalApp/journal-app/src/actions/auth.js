// 238, 240, 241

import { getAuth, signInWithPopup } from "firebase/auth";
import { googleAuthProvider } from "../firebase-config";

import { types } from "../types/types";

// 240
export const startLoginEmailPassword = (email, password) => {
  // el dispatch viene de thunk
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(123, "name: startLogin"));
    }, 2000);
  };
};

// 241
export const startGoogleLogin = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, googleAuthProvider).then((userCred) => {
      const { user } = userCred;
      dispatch(login(user.uid, user.displayName));
      console.log(userCred);
    });
  };
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});
