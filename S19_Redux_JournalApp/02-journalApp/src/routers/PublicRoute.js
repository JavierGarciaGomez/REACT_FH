// 195
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

export const PublicRoute = ({ isAuth, children }) => {
  return !isAuth ? <Navigate to="/" /> : children;
};

// PrivateRoute.propTypes = {
//   isAuthenticated: PropTypes.bool.isRequired,
//   component: PropTypes.func.isRequired,
// };
