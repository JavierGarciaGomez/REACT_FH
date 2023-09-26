import { useContext } from "react";
import { AuthContext } from "../auth";
import { Navigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export const PublicRoute = ({ children }: Props) => {
  const { authState } = useContext(AuthContext);
  const { logged } = authState;

  return !logged ? children : <Navigate to="/marvel" />;
};
