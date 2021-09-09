// 259, 262, 268, 272, 273
/*
    {notes: [],
    active: null or {
        id: '',
        title: ''.
        body: '',
        imageUrl: '',
        date: 12323243
    }}
*/

import { startSaveNote } from "../actions/notes";
import { types } from "../types/types";

const initialState = {
  notes: [],
  active: null,
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.notesActive:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };
    //   262
    case types.notesLoad:
      return {
        ...state,
        notes: [...action.payload],
      };

    // 268
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
        active: null,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };

    // 273

    case types.notesLogoutCleaning:
      return {
        ...state,
        active: null,
        notes: [],
      };

    case types.notesAddNew:
      return { ...state, notes: [action.payload, ...state.notes] };
    default:
      return state;
  }
};
