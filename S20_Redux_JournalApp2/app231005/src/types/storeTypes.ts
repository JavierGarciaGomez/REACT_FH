export type AuthUser = {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
};

export type LoginPayload = AuthUser;

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

export interface JournalState {
  isSaving: boolean;
  messageSaved: string;
  notes: Note[];
  active: Note | undefined;
}

export interface Note {
  id: string;
  title: string;
  body: string;
  date: number;
  imageUrls: string[];
}
