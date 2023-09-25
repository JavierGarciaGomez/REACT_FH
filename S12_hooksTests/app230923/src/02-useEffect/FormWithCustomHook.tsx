import { useForm } from "./hooks/useForm";

export const FormWithCustomHook = () => {
  const initialState = {
    username: "",
    email: "",
    password: "",
  };
  const { formState, handleInputChange, handleReset } = useForm(initialState);

  const { username, email, password } = formState;

  return (
    <>
      <h1>FormWithCustomHook</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="username"
        name="username"
        value={username}
        onChange={handleInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="user@mail.com"
        name="email"
        value={email}
        onChange={handleInputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="password"
        name="password"
        value={password}
        onChange={handleInputChange}
      />

      <button onClick={handleReset} className="btn btn-primary mt-2">
        Reset
      </button>
    </>
  );
};
