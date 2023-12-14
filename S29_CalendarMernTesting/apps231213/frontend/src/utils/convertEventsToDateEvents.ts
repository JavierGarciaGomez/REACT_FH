import { parseISO } from "date-fns";
import { CalendarEvent } from "../types/types";

export type CalendarEventWithStringDates = Omit<
  CalendarEvent,
  "startDate" | "endDate"
> & {
  startDate: string;
  endDate: string;
};

export const convertEventsToDateEvents = (
  events: CalendarEventWithStringDates[]
) => {
  return events.map((event) => {
    const endDate = parseISO(event.endDate);
    const startDate = parseISO(event.startDate);

    return { event, startDate, endDate };
  });
};
