// 301, 302, 303, 305, 306, 312, 315, 317, 373
import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Navbar } from "../ui/Navbar";
import { messages } from "../../helpers/calendar-messages-es";
import { CalendarEvent } from "./CalendarEvent";
import { CalendarModal } from "./CalendarModal";
import { uiOpenModal } from "../../actions/ui";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "moment/locale/es";
// 302
import {
  eventClearActiveEvent,
  eventSetActive,
  eventStartLoading,
} from "../../actions/events";
import { AddNewFab } from "../ui/AddNewFab";
import { DeleteEventFab } from "../ui/DeleteEventFab";

// 302
moment.locale("es");
const localizer = momentLocalizer(moment);
// const events = [
//   {
//     title: "Cumpl",
//     start: moment().toDate(),
//     end: moment().add(2, "hours").toDate(),
//     bgColor: "#fafafa",
//     notes: "comprar el pastel",
//     user: {
//       _id: "ssasa",
//       name: "Javier",
//     },
//   },
// ];

export const CalendarScreen = () => {
  const dispatch = useDispatch();
  // 315
  const { events, activeEvent } = useSelector((state) => state.calendar);
  // 373
  const { uid } = useSelector((state) => state.auth);
  // 306
  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "month"
  );

  // 372
  useEffect(() => {
    dispatch(eventStartLoading());
  }, [dispatch]);

  // 306, 312
  const onDoubleClick = (e) => {
    dispatch(uiOpenModal());
  };

  // 306
  const onSelectEvent = (e) => {
    dispatch(eventSetActive(e));
  };
  // 306
  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem("lastView", e);
  };

  const onSelectSlot = (e) => {
    // console.log(e)
    dispatch(eventClearActiveEvent());
  };

  // 305
  const eventStyleGetter = (event, start, end, isSelected) => {
    // console.log(event, start, end, isSelected);

    const style = {
      backgroundColor: uid === event.user._id ? "#367CF7" : "#465660",
      borderRadius: "0px",
      opacity: 0.8,
      display: "block",
      color: "white",
    };

    return {
      style,
    };
  };

  return (
    <div className="calendar-screen">
      <Navbar />
      <Calendar
        localizer={localizer}
        events={events}
        startAccesor="start"
        endAccesor="end"
        messages={messages}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
        onSelectSlot={onSelectSlot}
        selectable={true}
        view={lastView}
        components={{ event: CalendarEvent }}
        // 306
      />
      <AddNewFab />
      {activeEvent && <DeleteEventFab />}

      <CalendarModal />
    </div>
  );
};
