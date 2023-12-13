// 309, 311 setting up BigCalendar, 312 config es, adding Calendar Event, 322 show events from store, 324 delete note
import React, { useState } from "react";
import Navbar from "../ui/Navbar";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/es";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { messages } from "../../helpers/calendar-msg-es";
import { CalendarEvent } from "./CalendarEvent";
import { CalendarModal } from "./CalendarModal";
import { useDispatch, useSelector } from "react-redux";
import { uiOpenModal } from "../../actions/uiActions";
import {
  eventClearActiveEvent,
  eventSetActive,
} from "../../actions/eventActions";
import { AddNewFab } from "../ui/AddNewFab";
import { DeleteEventFab } from "../ui/DeleteEventFab";

moment.locale("es");
const localizer = momentLocalizer(moment);
// const events = [
//   {
//     title: "Mi primer evento",
//     start: moment().toDate(),
//     end: moment().add(2, "hours").toDate(),
//     bgcolor: "#fafafa",
//     notes: "Una nota del evento",
//     user: {
//       uid: 123,
//       name: "JGG",
//     },
//   },
// ];

const CalendarScreen = () => {
  // 319
  const dispatch = useDispatch();
  const { modalOpen } = useSelector((state) => state.ui);

  console.log("test modalOpen", modalOpen);
  // 313

  // 322
  const { events, activeEvent } = useSelector((state) => state.calendar);

  // 313
  const [lastView, setlastView] = useState(
    localStorage.getItem("lastView") || "month"
  );

  // 313
  const onDoubleClick = (e) => {
    dispatch(uiOpenModal());
    console.log("double", e);
  };
  //   313
  const onSelect = (e) => {
    dispatch(eventSetActive(e));
  };

  // 324
  const onSelectSlot = (e) => {
    dispatch(eventClearActiveEvent());
  };

  //   313
  const onViewChange = (e) => {
    setlastView(e);
    localStorage.setItem("lastView", e);
  };
  // 312
  const eventStyleGetter = (event, start, end, isSelected) => {
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
        // 213
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChange}
        view={lastView}
        // 324
        onSelectSlot={onSelectSlot}
        selectable={true}
      />
      <AddNewFab />
      {activeEvent && <DeleteEventFab />}

      <CalendarModal />
    </div>
  );
};

export default CalendarScreen;
