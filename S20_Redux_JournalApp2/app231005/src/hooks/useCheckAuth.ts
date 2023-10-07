import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from ".";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../firebase/config";
import { login, logout } from "../store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`

export const useCheckAuth = () => {
  const { status } = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, async (user) => {
      if (!user) return dispatch(logout({ errorMessage: "logout" }));
      dispatch(
        login({
          displayName: user.displayName!,
          email: user.email!,
          photoURL: user.photoURL!,
          uid: user.uid!,
        })
      );
    });
  }, []);

  return { status };
};
