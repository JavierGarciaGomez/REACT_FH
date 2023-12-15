export type CalendarEvent = {
  id?: string;
  title: string;
  notes: string;
  startDate: Date;
  endDate: Date;
  bgColor?: string;
  user?: {
    _id: string;
    name: string;
  };
};

export type CalendarState = {
  events: CalendarEvent[];
  activeEvent: CalendarEvent | undefined;
  isLoadingEvents: boolean;
};

export type AuthStatus = "checking" | "authenticated" | "not-authenticated";

export type AuthState = {
  status: AuthStatus;
  user?: AuthUser;
  errorMessage?: string;
};

export type AuthUser = {
  name: string;
  uid: string;
};

export type UiState = {
  isDateModalOpen: boolean;
};
