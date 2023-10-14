import { AuthState } from "../types/storeTypes";

export const initialAuthState: AuthState = {
  status: "checking", // 'checking', 'not-authenticated', 'authenticated'
  uid: undefined,
  email: undefined,
  displayName: undefined,
  photoURL: undefined,
  errorMessage: undefined,
};

export const authenticatedAuthState: AuthState = {
  status: "authenticated", // 'checking', 'not-authenticated', 'authenticated'
  uid: "123ABC",
  email: "demo@google.com",
  displayName: "Demo User",
  photoURL: "https://demo.jpg",
  errorMessage: undefined,
};

export const notAuthenticatedAuthState: AuthState = {
  status: "not-authenticated", // 'checking', 'not-authenticated', 'authenticated'
};

export const demoUser = {
  uid: "ABC123",
  email: "demo@google.com",
  displayName: "Demo User",
  photoURL: "https://foto.jpg",
};
