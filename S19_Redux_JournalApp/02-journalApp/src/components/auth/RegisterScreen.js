// 249, 250 validator, 251 dispatch error, 252, useSelector
import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import { removeError, setError } from "../../actions/ui";
import { useDispatch, useSelector } from "react-redux";
import { startRegisterWithEmailAndPassword } from "../../actions/auth";

export const RegisterScreen = () => {
  // 251
  const dispatch = useDispatch();
  //   252
  const { msgError } = useSelector((state) => state.ui);
  // 248
  const [formValues, handleInputChange, reset] = useForm({
    name: "JGG",
    email: "jgg@mail.com",
    password: "123456",
    password2: "123456",
  });

  //   248
  const { name, email, password, password2 } = formValues;

  //   248
  const handleRegister = (ev) => {
    ev.preventDefault();
    console.log(formValues);
    if (isFormValid()) {
      dispatch(startRegisterWithEmailAndPassword(email, password, name));
    }
  };

  //   249

  // 249
  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("Name is required"));
      return false;
    }
    if (!validator.isEmail(email)) {
      dispatch(setError("Email is not valid"));

      return false;
    }
    if (password.length < 5 || password !== password2) {
      dispatch(setError("Password should be at least 6 characters and match"));
      return false;
    }
    dispatch(removeError());
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>

      <form onSubmit={handleRegister}>
        {msgError && <div className="auth__alert-error">{msgError}</div>}
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />

        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder="Confirm password"
          name="password2"
          className="auth__input"
          value={password2}
          onChange={handleInputChange}
        />

        <button type="submit" className="btn btn-primary btn-block mb-5">
          Register
        </button>

        <Link to="/auth/login" className="link">
          Already registered?
        </Link>
      </form>
    </>
  );
};
