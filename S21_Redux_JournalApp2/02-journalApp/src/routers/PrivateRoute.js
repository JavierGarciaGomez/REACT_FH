// 191, 194
import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

export const PrivateRoute = ({ isAuth, children }) => {
  return isAuth ? children : <Navigate to="/auth/login" />;
};

// PrivateRoute.propTypes = {
//   isAuthenticated: PropTypes.bool.isRequired,
//   component: PropTypes.func.isRequired,
// };
