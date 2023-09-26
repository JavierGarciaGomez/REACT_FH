import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages";
import { HerosRoutes } from "../heros/routes/HerosRoutes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<HerosRoutes />} />
      </Routes>
    </>
  );
};
