import { CalendarEventBox, Navbar } from "../components";
import { Calendar, EventPropGetter, View } from "react-big-calendar";

import { addHours } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { calendarLocalizer, getMessagesES } from "../../utils";
import { useState } from "react";

export type CalendarEvent = {
  title: string;
  notes: string;
  start: Date;
  end: Date;
  bgColor: string;
  user: {
    _id: string;
    name: string;
  };
};

const events: CalendarEvent[] = [
  {
    title: "birthday",
    notes: "buy cake",
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: "#fafafa",
    user: {
      _id: "123",
      name: "JGG",
    },
  },
];

const eventStyleGetter: EventPropGetter<CalendarEvent> = (
  event: CalendarEvent,
  start: Date,
  end: Date,
  isSelected: boolean
) => {
  console.log({ event, start, end, isSelected });
  const style = {
    backgroundColor: "#347CF7",
    borderRadius: "0px",
    opacity: 0.8,
    color: "white",
  };

  return {
    style,
  };
};

export const CalendarPage = () => {
  const storedLastView = localStorage.getItem("lastView") || "week";
  const [lastView, setLastView] = useState(storedLastView as View);

  const handleDoubleClick = (event: CalendarEvent) => {
    console.log({ double: event });
  };

  const handleSelect = (event: CalendarEvent) => {
    console.log({ select: event });
  };

  const handleViewChange = (view: View) => {
    localStorage.setItem("lastView", view);
    setLastView(view);
  };

  return (
    <>
      <Navbar />
      <Calendar
        culture="es"
        localizer={calendarLocalizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc( 100vh - 80px )" }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{ event: CalendarEventBox }}
        onDoubleClickEvent={handleDoubleClick}
        onSelectEvent={handleSelect}
        onView={handleViewChange}
        defaultView={lastView}
      />
    </>
  );
};
