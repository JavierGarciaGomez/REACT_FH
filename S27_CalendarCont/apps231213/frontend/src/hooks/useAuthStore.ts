import { useAppDispatch, useAppSelector } from ".";
import { calendarApi } from "../api";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store";

interface ApiResponse<T = undefined> {
  status: number;
  ok: boolean;
  message: string;
  data?: T; // This makes the data property optional for error responses
}

// Define a specific type for the success response
interface AuthSuccessResponse {
  token: string;
  user: {
    name: string;
    email: string;
    createdAt: string; // Assuming createdAt is a date string
    updatedAt: string; // Assuming updatedAt is a date string
    uid: string;
  };
}

export const useAuthStore = () => {
  const dispatch = useAppDispatch();
  const { status, errorMessage, user } = useAppSelector(
    (state) => state.authReducer
  );

  type StartLoginArgs = {
    email: string;
    password: string;
  };

  const startLogin = async ({ email, password }: StartLoginArgs) => {
    try {
      dispatch(onChecking());

      const { data } = await calendarApi.post<ApiResponse<AuthSuccessResponse>>(
        "/auth/login",
        {
          email,
          password,
        }
      );

      if (data.ok) {
        localStorage.setItem("token", data.data?.token || "");
        localStorage.setItem(
          "token-init-date",
          new Date().getTime().toString()
        );
        dispatch(
          onLogin({ name: data.data!.user.name, uid: data.data!.user.uid })
        );
      }
    } catch (error) {
      dispatch(onLogout("Invalid credentials"));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 1000);
      console.log({ error });
    }
  };

  type StartRegisterArgs = {
    name: string;
    email: string;
    password: string;
  };

  const startRegister = async ({
    name,
    email,
    password,
  }: StartRegisterArgs) => {
    try {
      dispatch(onChecking());

      const { data } = await calendarApi.post<ApiResponse<AuthSuccessResponse>>(
        "/auth/register",
        {
          name,
          email,
          password,
        }
      );

      if (data.ok) {
        localStorage.setItem("token", data.data?.token || "");
        localStorage.setItem(
          "token-init-date",
          new Date().getTime().toString()
        );
        dispatch(
          onLogin({ name: data.data!.user.name, uid: data.data!.user.uid })
        );
      }
    } catch (error) {
      dispatch(onLogout("Invalid credentials"));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 1000);
      console.log({ error });
    }
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");
    console.log({ token });
    if (!token) return dispatch(onLogout("Missing token"));

    try {
      const { data } = await calendarApi.post("auth/refresh");
      localStorage.setItem("token", data.data?.token || "");
      localStorage.setItem("token-init-date", new Date().getTime().toString());
      dispatch(
        onLogin({ name: data.data!.user.name, uid: data.data!.user.uid })
      );
    } catch (error) {
      localStorage.clear();
      dispatch(onLogout("Missing token"));
    }
  };

  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout("logout"));
  };

  return {
    status,
    user,
    errorMessage,
    startLogin,
    startRegister,
    checkAuthToken,
    startLogout,
  };
};
