// 313, 315, 316

import { types } from "../types/types";

// {
//   id: new Date().getTime(),
//   title: "Cumpleaños del jefe",
//   start: moment().toDate(),
//   end: moment().add(2, "hours").toDate(),
//   bgcolor: "#fafafa",
//   notes: "Comprar el pastel",
//   user: {
//     _id: "123",
//     name: "Fernando",
//   },
// },
const initialState = {
  events: [],
  activeEvent: null,
};

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    //   313
    case types.eventSetActive:
      return {
        ...state,
        activeEvent: action.payload,
      };

    case types.eventAddNew:
      return {
        ...state,
        events: [...state.events, action.payload],
      };

    // 315
    case types.eventClearActiveEvent:
      return {
        ...state,
        activeEvent: null,
      };

    case types.eventUpdated:
      console.log("UPDATE", action);
      return {
        ...state,
        events: state.events.map((e) => {
          console.log(e.id);
          console.log("payliad", action.payload.id);

          return e.id === action.payload.id ? action.payload : e;
        }),
      };

    // 317
    case types.eventDeleted:
      return {
        ...state,
        events: state.events.filter((e) => e.id !== state.activeEvent.id),
        activeEvent: null,
      };

    case types.eventLoaded:
      return {
        ...state,
        events: [...action.payload],
      };

    case types.eventLogout:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
