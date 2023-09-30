// ..., 256 mantener estado al recargar

import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import {
  BrowserRouter,
  Switch,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";

import { AuthRouter } from "./AuthRouter";
import { JournalScreen } from "../components/journal/JournalScreen";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { RegisterScreen } from "../components/auth/RegisterScreen";
import { LoginScreen } from "../components/auth/LoginScreen";

export const AppRouter = () => {
  // 257 espera a ver si ya se cargó la autenticación
  const [checking, setchecking] = useState(true);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  // 256
  const dispatch = useDispatch();
  // 256
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setisLoggedIn(true);
      } else {
        setisLoggedIn(false);
      }
      setchecking(false);
    });
  }, [dispatch, setchecking, setisLoggedIn]);

  if (checking) {
    return <h1>Espere</h1>;
  }
  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn ? (
          <Route path="*" element={<JournalScreen />} />
        ) : (
          <Route path="*" element={<AuthRouter />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};
