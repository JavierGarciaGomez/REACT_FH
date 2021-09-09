// 219, 112, 242, 243, 244, 245
import React from "react";
import { Link } from "react-router-dom";
// 244
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
import { useForm } from "../../hooks/useForm";
// 243
import { removeError, setError } from "../../actions/ui";
import { startRegisterWithData } from "../../actions/auth";

export const RegisterScreen = () => {
  // 244
  const dispatch = useDispatch();
  // 245
  const { msgError } = useSelector((state) => state.ui);

  console.log(msgError);
  // 242
  const [values, handleInputChange] = useForm({
    name: "JGG",
    email: "jgg@mail.com",
    password: "123456",
    password2: "123456",
  });

  // 242
  const { name, email, password, password2 } = values;

  // 242
  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startRegisterWithData(email, password, name));
    }
  };

  // 244
  const isFormValid = () => {
    if (name.trim().length === 0) {
      const algo = setError("Name is required");
      console.log(algo);

      dispatch(algo);
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
      <h3 className="auth__title">Register </h3>
      <form
        onSubmit={handleRegister}
        className="animate__animated animate__fadeIn animate__faster"
      >
        {msgError && <div className="auth__alert-error">{msgError}</div>}
        <input
          type="text"
          placeholder="name"
          name="name"
          className="auth__input"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          className="auth__input"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Confirm"
          name="password2"
          className="auth__input"
          value={password2}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary btn-block  mb-5">
          Register
        </button>
        <Link to="/auth/login" className="link">
          Already registered?
        </Link>
      </form>
    </>
  );
};
