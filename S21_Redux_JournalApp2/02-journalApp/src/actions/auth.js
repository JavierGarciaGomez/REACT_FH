// 245, 247, 248, 258, 260 sweet alert2

import Swal from "sweetalert2";

import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { googleAuthProvider } from "../firebase/firebase-config";

import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui";
import { noteLogout } from "./notesActions";

// 245
export const login = (uid, displayName) => {
  console.log("here login", uid);
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};

// 247 acción asíncrona
export const startLoginEmailPassword = (email, password) => {
  // the dispatch comes from thunk
  return (dispatch) => {
    dispatch(startLoading());
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      })
      .catch((error) => {
        console.log(error);
        dispatch(finishLoading());
        Swal.fire("Error", error.message, "error");
      });

    dispatch(finishLoading());
  };
};

// 253 register
export const startRegisterWithEmailAndPassword = (email, password, name) => {
  // the dispatch comes from thunk
  return (dispatch) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        await updateProfile(user, { displayName: name });
        console.log("printing user", user);
        dispatch(login(user.uid, user.displayName));
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Error", error.message, "error");
      });
  };
};

// 248 google auth
export const startGoogleLogin = () => {
  return (dispatch) => {
    const auth = getAuth();

    signInWithPopup(auth, googleAuthProvider).then(({ user }) => {
      dispatch(login(user.uid, user.displayName));
    });
    // firebase.auth().signInWithPopup();
  };
};

// 258
export const startLogout = () => {
  console.log("start logot");
  return async (dispatch) => {
    const auth = getAuth();
    await signOut(auth);
    dispatch(logout());
    dispatch(noteLogout());
  };
};

export const logout = () => ({
  type: types.logout,
});
