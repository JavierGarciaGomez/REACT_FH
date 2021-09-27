// 301, 302, 303, 305, 306, 312, 315
import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Navbar } from "../ui/Navbar";
// 302
import { messages } from "../../helpers/calendar-messages-es";
import "moment/locale/es";
import { CalendarEvent } from "./CalendarEvent";
import { CalendarModal } from "./CalendarModal";
import { useDispatch, useSelector } from "react-redux";
import { uiOpenModal } from "../../actions/ui";
import { eventSetActive } from "../../actions/events";
import { AddNewFab } from "../ui/AddNewFab";

const localizer = momentLocalizer(moment);
// 302
moment.locale("es");
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

// 305
const eventStyleGetter = (event, start, end, isSelected) => {
  // console.log(event, start, end, isSelected);

  const style = {
    backgroundColor: "#367CF7",
    borderRadius: "0px",
    opacity: 0.8,
    display: "block",
    color: "white",
  };

  return {
    style,
  };
};

moment.locale("es");

export const CalendarScreen = () => {
  const dispatch = useDispatch();

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
    console.log(e);
    setLastView(e);
    localStorage.setItem("lastView", e);
  };

  // 306
  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "month"
  );

  // 315
  const { events } = useSelector((state) => state.calendar);

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
        components={{ event: CalendarEvent }}
        // 306
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
        view={lastView}
      />
      <AddNewFab />
      <CalendarModal />
    </div>
  );
};
