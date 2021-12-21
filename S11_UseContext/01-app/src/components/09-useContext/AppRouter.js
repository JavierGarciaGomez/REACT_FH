// ..., 139
import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AboutScreen } from "./AboutScreen";
import { h404 } from "./h404";
import { HomeScreen } from "./HomeScreen";
import { LoginScreen } from "./LoginScreen";
import { NavBar } from "./NavBar";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/about" component={AboutScreen} />
            <Route path="/login" component={LoginScreen} />
            <Route exact path="/" component={HomeScreen} />
            <Route component={h404} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};
