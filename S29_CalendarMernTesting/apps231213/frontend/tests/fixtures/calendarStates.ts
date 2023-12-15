import { CalendarState } from "../../src/types/types";

export const events = [
  {
    id: "1",
    startDate: new Date("2023-10-21 13:00:00"),
    endDate: new Date("2023-10-21 15:00:00"),
    title: "Cumpleaños de Fernando",
    notes: "Alguna nota",
  },
  {
    id: "2",
    startDate: new Date("2023-11-09 13:00:00"),
    endDate: new Date("2023-11-09 15:00:00"),
    title: "Cumpleaños de Melissa",
    notes: "Alguna nota de Melissa",
  },
];

export const initialCalendarState: CalendarState = {
  isLoadingEvents: true,
  events: [],
  activeEvent: undefined,
};

export const calendarWithEventsState: CalendarState = {
  isLoadingEvents: false,
  events: [...events],
  activeEvent: undefined,
};

export const calendarWithActiveEventState: CalendarState = {
  isLoadingEvents: false,
  events: [...events],
  activeEvent: { ...events[0] },
};
