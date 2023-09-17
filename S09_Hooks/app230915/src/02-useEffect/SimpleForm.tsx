import { ChangeEvent, useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setformState] = useState({
    username: "JGG",
    email: "javi@mail.com",
  });

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setformState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const { username, email } = formState;

  useEffect(() => {
    console.log("useEffectCalled");
  }, [formState]);

  return (
    <>
      <h1>SimpleForm</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="user@mail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      {username === "JGG2" && <Message />}
    </>
  );
};
