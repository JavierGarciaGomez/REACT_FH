import { FormEvent, useEffect } from "react";
import { useAuthStore, useForm } from "../../hooks";
import "./LoginPage.css";
import Swal from "sweetalert2";

const loginFormFields = {
  loginEmail: "",
  loginPassword: "",
};

const registerFormFields = {
  registerName: "",
  registerEmail: "",
  registerPassword: "",
  registerPassword2: "",
};

export const LoginPage = () => {
  const {
    formState: loginFormState,
    handleInputChange: handleLoginInputChange,
    handleReset: handleLoginReset,
  } = useForm(loginFormFields);

  const { loginEmail, loginPassword } = loginFormState;

  const { startLogin, startRegister, errorMessage } = useAuthStore();

  const {
    formState: registerFormState,
    handleInputChange: handleRegisterInputChange,
    handleReset: handleRegisterReset,
  } = useForm(registerFormFields);

  const { registerEmail, registerName, registerPassword, registerPassword2 } =
    registerFormState;

  const handleLoginSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    startLogin({
      email: loginFormState.loginEmail,
      password: loginFormState.loginPassword,
    });

    handleLoginReset();
  };

  const handleRegisterSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (registerPassword !== registerPassword2) {
      Swal.fire("Register error", "The passwords don't match", "error");
      return;
    }
    console.log({ registerFormState });
    startRegister({
      name: registerFormState.registerName,
      email: registerFormState.registerEmail,
      password: registerFormState.registerPassword,
    });

    handleRegisterReset();
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire("Auth error", errorMessage, "error");
    }
  }, [errorMessage]);

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>Ingreso</h3>
          <form onSubmit={handleLoginSubmit}>
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="email"
                name="loginEmail"
                onChange={handleLoginInputChange}
                value={loginEmail}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="password"
                name="loginPassword"
                onChange={handleLoginInputChange}
                value={loginPassword}
              />
            </div>
            <div className="d-grid gap-2">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
          </form>
        </div>

        <div className="col-md-6 login-form-2">
          <h3>Registro</h3>
          <form onSubmit={handleRegisterSubmit}>
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="name"
                name="registerName"
                value={registerName}
                onChange={handleRegisterInputChange}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="email"
                className="form-control"
                placeholder="email"
                name="registerEmail"
                value={registerEmail}
                onChange={handleRegisterInputChange}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="password"
                name="registerPassword"
                value={registerPassword}
                onChange={handleRegisterInputChange}
              />
            </div>

            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="repeat password"
                name="registerPassword2"
                value={registerPassword2}
                onChange={handleRegisterInputChange}
              />
            </div>

            <div className="d-grid gap-2">
              <input type="submit" className="btnSubmit" value="Sign in" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
