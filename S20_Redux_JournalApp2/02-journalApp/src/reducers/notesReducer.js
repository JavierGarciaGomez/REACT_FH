// 266

import { types } from "../types/types";
// {notes: [], active: null || {id: 'xxxxxx', title: '', body: '', imgUrl: '', date: 4466484134}}

export const notesReducer = (
  state = { notes: [], activeNote: null },
  action
) => {
  switch (action.type) {
    case types.notesActive:
      return {
        ...state,
        activeNote: action.payload,
      };

    case types.notesAddNew:
      break;

    case types.notesLoad:
      return {
        ...state,
        notes: [...action.payload],
      };

    case types.notesUpdated:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload.note : note
        ),
      };

    case types.notesDelete:
      return {
        ...state,
        activeNote: null,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };

    case types.notesLogoutCleaning:
      return { ...state, activeNote: null, notes: [] };

    case types.notesAddNew:
      return {
        ...state,
        notes: [action.payload, ...state.notes],
      };

    default:
      return state;
  }
};
