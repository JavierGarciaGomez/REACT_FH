import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CalendarEvent, CalendarState } from "../types/types";

// const tempEvent: CalendarEvent = {
//   id: new Date().toString(),
//   title: "birthday",
//   notes: "buy cake",
//   startDate: new Date(),
//   endDate: addHours(new Date(), 2),
//   bgColor: "#fafafa",
//   user: {
//     _id: "123",
//     name: "JGG",
//   },
// };

const initialState: CalendarState = {
  isLoadingEvents: true,
  events: [],
  activeEvent: undefined,
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    onSetActiveEvent: (state, { payload }: PayloadAction<CalendarEvent>) => {
      state.activeEvent = payload;
    },
    onAddNewEvent: (state, { payload }: PayloadAction<CalendarEvent>) => {
      state.events.push(payload);
      state.activeEvent = undefined;
    },
    onUpdateEvent: (state, { payload }: PayloadAction<CalendarEvent>) => {
      state.events = state.events.map((event) => {
        if (event.id === payload.id) {
          return payload;
        }
        return event;
      });
    },
    onDeleteEvent: (state) => {
      if (state.activeEvent) {
        state.events = state.events.filter(
          (event) => event.id !== state.activeEvent!.id
        );
        state.activeEvent = undefined;
      }
    },
    onLoadEvents: (state, { payload }: PayloadAction<CalendarEvent[]>) => {
      state.isLoadingEvents = false;
      payload.forEach((calendarEvent) => {
        const exists = state.events.some(
          (dbEvent) => dbEvent.id === calendarEvent.id
        );
        if (!exists) {
          state.events.push(calendarEvent);
        }
      });
    },
    onLogoutCalendar: (state) => {
      state.isLoadingEvents = true;
      state.events = [];
      state.activeEvent = undefined;
    },
  },
});

export const {
  onSetActiveEvent,
  onAddNewEvent,
  onUpdateEvent,
  onDeleteEvent,
  onLoadEvents,
  onLogoutCalendar,
} = calendarSlice.actions;
