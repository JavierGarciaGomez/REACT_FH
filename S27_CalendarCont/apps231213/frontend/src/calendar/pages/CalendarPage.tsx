import {
  CalendarEventBox,
  CalendarModal,
  FabAddNew,
  Navbar,
} from "../components";
import { Calendar, View } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { calendarLocalizer, getMessagesES } from "../../utils";
import { useEffect, useState } from "react";
import { useAuthStore, useUiStore } from "../../hooks";
import { CalendarEvent } from "../../types/types";
import { useCalendarStore } from "../../hooks/useCalendarStore";
import { FabDelete } from "../components/FabDelete";

export const CalendarPage = () => {
  const { user } = useAuthStore();
  const { events, setActiveEvent, startLoadingEvents } = useCalendarStore();
  const { openDateModal } = useUiStore();

  const storedLastView = localStorage.getItem("lastView") || "week";
  const [lastView, setLastView] = useState(storedLastView as View);

  const eventStyleGetter = (event: CalendarEvent) => {
    const isMyEvent =
      user!.uid === event!.user!._id || user!.uid === event!.user!._id;

    const style = {
      backgroundColor: isMyEvent ? "#347CF7" : "#465660",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
    };

    return {
      style,
    };
  };

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

  useEffect(() => {
    startLoadingEvents();
  }, []);

  return (
    <>
      <Navbar />
      <Calendar
        culture="es"
        localizer={calendarLocalizer}
        events={events}
        startAccessor="startDate"
        endAccessor="endDate"
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
