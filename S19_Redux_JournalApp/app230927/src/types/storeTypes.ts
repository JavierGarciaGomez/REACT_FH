export interface AuthState {
  status: "checking" | "not-authenticated" | "authenticated";
  uid?: string;
  email?: string;
  displayName?: string;
  photoURL?: string;
  errorMessage?: string;
}
