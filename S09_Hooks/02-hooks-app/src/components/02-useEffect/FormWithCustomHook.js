// 110
import React, { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import "./effects.css";

export const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formValues;

  useEffect(() => {
    console.log("EL EMAIL HA CAMBIADO");
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>110. Form With Custom Hook</h3>
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="tu nombre"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="email@email.com"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <div className="password">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="********"
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Save
      </button>

      <hr></hr>
    </form>
  );
};
