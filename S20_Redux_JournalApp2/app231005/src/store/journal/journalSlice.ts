import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { JournalState, Note } from "../../types/storeTypes";

const initialState: JournalState = {
  isSaving: false,
  messageSaved: "",
  notes: [],
  activeNote: undefined,
};

export const journalSlice = createSlice({
  name: "journals",
  initialState,
  reducers: {
    setSavingFalse: (state) => {
      state.isSaving = false;
    },
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action: PayloadAction<Note>) => {
      state.activeNote = action.payload;
      state.messageSaved = "";
    },
    setNotes: (state, action: PayloadAction<Note[]>) => {
      state.notes = action.payload;
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.messageSaved = "";
    },
    updateNote: (state, action: PayloadAction<Note>) => {
      state.isSaving = false;
      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.id) {
          return action.payload;
        }

        return note;
      });
      state.messageSaved = `${action.payload.title}, updated successfully`;
    },
    deleteNoteById: (state, action: PayloadAction<string>) => {
      state.activeNote = undefined;
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    setPhotosToActiveNote: (state, action: PayloadAction<string[]>) => {
      state.activeNote!.imageUrls = [
        ...state.activeNote!.imageUrls,
        ...action.payload,
      ];
      state.isSaving = false;
    },
    clearNotesLogout: (state) => {
      state.isSaving = false;
      state.messageSaved = "";
      state.notes = [];
      state.activeNote = undefined;
    },
  },
});

export const {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
  savingNewNote,
  setSavingFalse,
  setPhotosToActiveNote,
  clearNotesLogout,
} = journalSlice.actions;
