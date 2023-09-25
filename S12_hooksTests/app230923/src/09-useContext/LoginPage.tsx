import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>LoginPage</h1>
      <hr />
      <pre aria-label="pre">{JSON.stringify(user, undefined, 3)}</pre>
      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({ id: 123, name: "Juan", email: "juan@google.com" })
        }
        aria-label="Set user"
      >
        Set user
      </button>
      <button className="btn btn-primary" onClick={() => setUser(undefined)}>
        Remove User
      </button>
    </>
  );
};
