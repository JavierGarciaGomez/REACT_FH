// 107
import React, { useEffect, useState } from "react";
import "./effects.css";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "123",
    email: "",
  });

  const { name, email } = formState;

  useEffect(() => {
    console.log("107. use effect. log desde el use Effect");
  }, []);

  useEffect(() => {
    console.log("107. use effect. formState cambió");
  }, [formState]);

  useEffect(() => {
    console.log("107. use effect. email cambió");
  }, [email]);

  const handleInputChange = (event) => {
    const { target } = event;
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
    event.preventDefault();
    console.log("107. handle input change", event.target);
  };

  return (
    <>
      <h3>107 use effect</h3>
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
          type="text"
          name="email"
          className="form-control"
          placeholder="email@email.com"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      {name === "123" && <Message />}

      <hr></hr>
    </>
  );
};
