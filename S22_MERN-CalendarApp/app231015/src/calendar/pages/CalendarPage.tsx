import {
  CalendarEventBox,
  CalendarModal,
  FabAddNew,
  Navbar,
} from "../components";
import { Calendar, EventPropGetter, View } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { calendarLocalizer, getMessagesES } from "../../utils";
import { useState } from "react";
import { useUiStore } from "../../hooks";
import { CalendarEvent } from "../../types/types";
import { useCalendarStore } from "../../hooks/useCalendarStore";
import { FabDelete } from "../components/FabDelete";

const eventStyleGetter: EventPropGetter<CalendarEvent> = () =>
  // event: CalendarEvent,
  // start: Date,
  // end: Date,
  // isSelected: boolean
  {
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
  const { events, setActiveEvent } = useCalendarStore();
  const { openDateModal } = useUiStore();

  const storedLastView = localStorage.getItem("lastView") || "week";
  const [lastView, setLastView] = useState(storedLastView as View);

  const handleDoubleClick = (event: CalendarEvent) => {
    console.log({ double: event });
    openDateModal();
  };

  const handleSelect = (event: CalendarEvent) => {
    setActiveEvent(event);
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
      <CalendarModal />
      <FabAddNew />
      <FabDelete />
    </>
  );
};
