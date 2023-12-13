import { CalendarEvent } from "..";

type Props = { event: CalendarEvent };

export const CalendarEventBox = ({ event }: Props) => {
  return (
    <>
      <strong>{event.title}</strong>
      <span>{event.user.name}</span>
    </>
  );
};
