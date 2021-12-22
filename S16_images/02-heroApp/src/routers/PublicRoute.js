// 195
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "../auth/AuthContext";

export const PublicRoute = ({ children }) => {
  const { userState } = useContext(AuthContext);

  // localStorage.setItem("lastPath", rest.location.pathname);
  return !userState.logged ? children : <Navigate to="/" />;
};

// PrivateRoute.propTypes = {
//   isAuthenticated: PropTypes.bool.isRequired,
//   component: PropTypes.func.isRequired,
// };
