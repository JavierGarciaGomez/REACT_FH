import { Route, Routes } from "react-router-dom";
import { HerosRoutes } from "../heros/routes/HerosRoutes";
import { PrivateRoute, PublicRoute } from ".";
import { LoginPage } from "../auth";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="login"
          element={
            <PublicRoute>
              <Routes>
                <Route path="/*" element={<LoginPage />} />
              </Routes>
            </PublicRoute>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HerosRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
