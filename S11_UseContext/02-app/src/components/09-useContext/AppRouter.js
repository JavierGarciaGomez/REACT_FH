// 138
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import React from "react";
import AboutScreen from "./AboutScreen";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import NavBar from "./NavBar";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/about" element={<AboutScreen />} />
            <Route path="/login" element={<LoginScreen />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default AppRouter;
