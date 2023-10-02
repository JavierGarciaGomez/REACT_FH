export interface LoginPayload {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
}

export interface LogoutPayload {
  errorMessage: string;
}

export interface AuthState {
  status: "checking" | "not-authenticated" | "authenticated";
  uid?: string;
  email?: string;
  displayName?: string;
  photoURL?: string;
  errorMessage?: string;
}
