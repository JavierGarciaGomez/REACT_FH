import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "..";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = () => {
    const newUser = { id: 1, name: "JGG", email: "javi@mail.com" };
    const lastPath = localStorage.getItem("lastPath") || "/";
    login(newUser);
    navigate(lastPath, {
      replace: true,
    });
  };
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
