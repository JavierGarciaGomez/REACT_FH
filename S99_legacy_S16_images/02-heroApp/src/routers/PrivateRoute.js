// 191, 194
import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "../auth/AuthContext";

export const PrivateRoute = ({ children }) => {
  const { userState } = useContext(AuthContext);

  // 196
  const location = useLocation();
  const { pathname, search } = location;
  localStorage.setItem("lastPath", pathname + search);

  // localStorage.setItem("lastPath", rest.location.pathname);
  return userState.logged ? children : <Navigate to="/login" />;
};

// PrivateRoute.propTypes = {
//   isAuthenticated: PropTypes.bool.isRequired,
//   component: PropTypes.func.isRequired,
// };
