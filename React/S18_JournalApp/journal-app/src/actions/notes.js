// 260,263, 267, 268, 270, 273

import { db } from "../firebase/firebase-config";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";
import Swal from "sweetalert2";
import { fileUpload } from "../helpers/fileUpload";

// react-course

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const state = getState();
    console.log("notes.js, printing state", state);
    const uid = state.auth.uid;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const docRef = await db.collection(`${uid}/journal/notes`).add(newNote);
    console.log(docRef);
    dispatch(activeNote(docRef.id, newNote));
    // 273
    dispatch(addNewNote(docRef.id, newNote));
  };
};

export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note,
  },
});

// 262
export const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes,
});

// 263
export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    // 262
    dispatch(setNotes(notes));
  };
};

// 267
export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if (!note.url) delete note.url;
    const noteToFirestore = { ...note };
    delete noteToFirestore.id;

    await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);
    dispatch(refreshNote(note.id, noteToFirestore));
    Swal.fire("Saved", note.title, "success");
  };
};

// 268
export const refreshNote = (id, note) => ({
  type: types.notesUpdated,
  payload: { id, note: { id, ...note } },
});

// 270
export const startUploading = (file) => {
  return async (dispatch, getState) => {
    const activeNote = getState().notes.active;
    Swal.fire({
      title: "Uploading...",
      text: "Please wait...",
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });
    const fileUrl = await fileUpload(file);
    activeNote.url = fileUrl;
    Swal.close();
    dispatch(startSaveNote(activeNote));
  };
};

// 272
export const startDeleting = (id) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    await db.doc(`${uid}/journal/notes/${id}`).delete();
    dispatch(deleteNote(id));
  };
};

// 272
export const deleteNote = (id) => ({
  type: types.notesDelete,
  payload: id,
});

// 273
export const noteLogout = () => ({
  type: types.notesLogoutCleaning,
});

// 273
export const addNewNote = (id, note) => ({
  type: types.notesAddNew,
  payload: { id, ...note },
});
