// 309, 370, 372 routes protection

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter,
  Route,
  Routes,
  useSearchParams,
} from "react-router-dom";
import { startChecking } from "../actions/authActions";
import { LoginScreen } from "../components/auth/LoginScreen";
import CalendarScreen from "../components/calendar/CalendarScreen";
import Navbar from "../components/ui/Navbar";

export const AppRouter = () => {
  // 370
  const dispatch = useDispatch();
  const { checking, uid } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  // 370
  if (checking) {
    return <h5>Espere...</h5>;
  }

  return (
    <BrowserRouter>
      {!!uid ? (
        <Routes>
          <Route path="/calendar" element={<CalendarScreen></CalendarScreen>} />
          <Route path="/*" element={<CalendarScreen></CalendarScreen>} />
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/*"
            element={
              <div>
                <LoginScreen></LoginScreen>
              </div>
            }
          />
        </Routes>
      )}
    </BrowserRouter>
  );
};
