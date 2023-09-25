import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../HomePage";
import { AboutPage } from "../AboutPage";
import { LoginPage } from "../LoginPage";
import { ErrorPage } from "../ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "about",
    element: <AboutPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
