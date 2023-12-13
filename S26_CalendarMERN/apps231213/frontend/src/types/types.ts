export type CalendarEvent = {
  _id?: string;
  title: string;
  notes: string;
  start: Date;
  end: Date;
  bgColor?: string;
  user?: {
    _id: string;
    name: string;
  };
};

export type CalendarState = {
  events: CalendarEvent[];
  activeEvent: CalendarEvent | undefined;
};
