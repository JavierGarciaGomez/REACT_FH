import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";
import { CalendarEvent, CalendarState } from "../../types/types";

const tempEvent: CalendarEvent = {
  _id: new Date().toString(),
  title: "birthday",
  notes: "buy cake",
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: "#fafafa",
  user: {
    _id: "123",
    name: "JGG",
  },
};

const initialState: CalendarState = {
  events: [tempEvent],
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
        if (event._id === payload._id) {
          return payload;
        }
        return event;
      });
    },
    onDeleteEvent: (state) => {
      if (state.activeEvent) {
        state.events = state.events.filter(
          (event) => event._id !== state.activeEvent!._id
        );
        state.activeEvent = undefined;
      }
    },
  },
});

export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent } =
  calendarSlice.actions;
