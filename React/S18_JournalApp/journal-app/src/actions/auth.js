// 238, 240, 241, 245

import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { googleAuthProvider } from "../firebase-config";

import { types } from "../types/types";

// 240, 247
export const startLoginEmailPassword = (email, password) => {
  // el dispatch viene de thunk
  return (dispatch) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCred) => {
        const { user } = userCred;
        console.log(user);

        dispatch(login(user.uid, user.displayName));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// 241
export const startGoogleLogin = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, googleAuthProvider).then((userCred) => {
      const { user } = userCred;
      dispatch(login(user.uid, user.displayName));
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

// 245
export const startRegisterWithData = (email, password, name) => {
  return (dispatch) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCred) => {
        const { user } = userCred;
        await updateProfile(user, { displayName: name });
        dispatch(login(user.uid, user.displayName));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
