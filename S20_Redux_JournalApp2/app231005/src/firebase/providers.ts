import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();
export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(firebaseAuth, googleProvider);
    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      // User info
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      // Handle errors of type Error
      console.log(error);
      const errorMessage = error.message;

      return {
        ok: false,
        errorMessage,
      };
    } else {
      // Handle other types of errors
      console.error("Unknown error:", error);

      return {
        ok: false,
        errorMessage: "An unknown error occurred",
      };
    }
  }
};

type RegisterUserParams = {
  email: string;
  password: string;
  displayName: string;
};

export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
}: RegisterUserParams) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    const { uid, photoURL } = resp.user;

    await updateProfile(firebaseAuth.currentUser!, { displayName });

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error);
      const errorMessage = error.message;

      return {
        ok: false,
        errorMessage,
      };
    } else {
      console.error("Unknown error:", error);

      return {
        ok: false,
        errorMessage: "An unknown error occurred",
      };
    }
  }
};

type LoginWithEmailAndPasswordParams = {
  email: string;
  password: string;
};

export const loginWithEmailAndPassword = async ({
  email,
  password,
}: LoginWithEmailAndPasswordParams) => {
  try {
    const resp = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    const { displayName, email: userEmail, photoURL, uid } = resp.user;

    return {
      ok: true,
      uid,
      photoURL,
      email: userEmail,
      displayName,
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error);
      const errorMessage = error.message;

      return {
        ok: false,
        errorMessage,
      };
    } else {
      console.error("Unknown error:", error);

      return {
        ok: false,
        errorMessage: "An unknown error occurred",
      };
    }
  }
};

export const logoutFirebase = async () => {
  try {
    return await firebaseAuth.signOut();
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
      const errorMessage = error.message;

      return {
        ok: false,
        errorMessage,
      };
    } else {
      console.error("Unknown error:", error);

      return {
        ok: false,
        errorMessage: "An unknown error occurred",
      };
    }
  }
};
