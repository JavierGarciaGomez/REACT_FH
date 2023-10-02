import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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
