import React from "react";
import { Switch, Route, Redirect, Routes, Navigate } from "react-router-dom";

import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";

export const AuthRouter = () => {
  return (
    <div className="auth__main">
      <div className="auth__box-container">
        <Routes>
          <Route path="/*" element={<LoginScreen />} />

          <Route path="/auth/register" element={<RegisterScreen />} />
        </Routes>
      </div>
    </div>
  );
};
