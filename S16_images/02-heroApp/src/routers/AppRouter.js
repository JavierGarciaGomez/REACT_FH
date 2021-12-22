// 172, 173, 194
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 195 */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginScreen />
            </PublicRoute>
          }
        />
        {/* 173, 194 */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <DashboardRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
