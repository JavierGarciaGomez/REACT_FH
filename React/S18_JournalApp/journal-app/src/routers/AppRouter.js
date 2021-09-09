// 219, 249, 252, 262,
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { useDispatch } from "react-redux";
import { firebase } from "../firebase/firebase-config";
import { AuthRouter } from "./AuthRouter";

import { JournalScreen } from "../components/journal/JournalScreen";
import { login } from "../actions/auth";
// 252
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

import { startLoadingNotes } from "../actions/notes";

export const AppRouter = () => {
  // 249
  const dispatch = useDispatch();

  // 250
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    //
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));

        setIsLoggedIn(true);

        dispatch(startLoadingNotes(user.uid));
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });

    return () => {};
  }, [dispatch, setChecking, setIsLoggedIn]);

  // 250
  if (checking) {
    return <h1> Please wait...</h1>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/auth"
            component={AuthRouter}
            isAuthenticated={isLoggedIn}
          />
          <PrivateRoute
            exact
            isAuthenticated={isLoggedIn}
            path="/"
            component={JournalScreen}
          />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
