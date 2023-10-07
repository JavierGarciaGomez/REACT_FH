import { createSlice } from "@reduxjs/toolkit";
import { JournalState } from "../../types/storeTypes";

const initialState: JournalState = {
  isSaving: true,
  messageSaved: "",
  notes: [],
  active: undefined,
};

export const journalSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addNewEmptyNote: (state) => {
      state.isSaving = true;
    },
    setActiveNote: (state) => {
      state.isSaving = true;
    },
    setNotes: (state) => {
      state.isSaving = true;
    },
    setSaving: (state) => {
      state.isSaving = true;
    },
    updateNote: (state) => {
      state.isSaving = true;
    },
    deleteNoteById: (state) => {
      state.isSaving = true;
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
} = journalSlice.actions;
