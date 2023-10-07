// ..., 245, 247, 248 googleSignin, 255 block login button while loading
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  login,
  startGoogleLogin,
  startLoginEmailPassword,
} from "../../actions/auth";
import { useForm } from "../../hooks/useForm";

export const LoginScreen = () => {
  // 245
  const dispatch = useDispatch();
  // 255
  const { loading } = useSelector((state) => state.ui);
  console.log(loading);

  const [formValues, handleInputChange, reset] = useForm({
    email: "jgg@mail.com",
    password: "123456",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    // dispatch(login(new Date().getTime().toString(), formValues.email));
    // 247 dispatch async action
    dispatch(startLoginEmailPassword(formValues.email, formValues.password));
  };

  // 248
  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <>
      <h3 className="auth__title">Login</h3>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
          onChange={handleInputChange}
          value={formValues.email}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          onChange={handleInputChange}
          value={formValues.password}
        />

        <button
          type="submit"
          className="btn btn-primary btn-block "
          disabled={loading}
        >
          Login
        </button>

        <div className="auth__social-networks">
          <p>Login with social networks</p>

          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>

        <Link to="/auth/register" className="link">
          Create new account
        </Link>
      </form>
    </>
  );
};
