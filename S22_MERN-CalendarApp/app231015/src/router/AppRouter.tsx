import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { CalendarPage } from "../calendar";

export const AppRouter = () => {
  // TODO: Improve
  let authStatus: string | undefined = undefined;
  if (authStatus) {
    authStatus = "authenticated";
  }
  return (
    <Routes>
      {authStatus === "not-authenticated" ? (
        <Route path="auth/*" element={<LoginPage />} />
      ) : (
        <Route path="/*" element={<CalendarPage />} />
      )}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
