// 309

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import CalendarScreen from "../components/calendar/CalendarScreen";
import Navbar from "../components/ui/Navbar";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <div>
              <LoginScreen></LoginScreen>
            </div>
          }
        />
        <Route path="/calendar" element={<CalendarScreen></CalendarScreen>} />
        <Route path="/*" element={<LoginScreen></LoginScreen>} />
      </Routes>
    </BrowserRouter>
  );
};
