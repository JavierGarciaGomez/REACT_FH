/*
267 startnewnote, 268 setActiveNote, 269 setnotes, 270 startLoadingNotes, 274 startSaveNote, 277 start uploading files
279 delete note
*/
import { db } from "../firebase/firebase-config";
// import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";
import Swal from "sweetalert2";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { loadNotes } from "../helpers/loadNotes";
import { fileUpload } from "../helpers/fileUpload";
// import { fileUpload } from "../helpers/fileUpload";

// react-course

// 267
export const startNewNote = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const uid = state.auth.uid;

    console.log("uid", uid);

    const newNote = {
      title: "cosa",
      body: "",
      date: new Date().getTime(),
    };

    try {
      const doc = await addDoc(
        collection(db, `${uid}`, "journal/notes"),
        newNote
      );

      console.log("doc written", doc);
      // set the new note as active
      dispatch(activeNote(doc.id, newNote));
      // 273
      dispatch(addNewNote(doc.id, newNote));
    } catch (error) {
      console.log(error);
    }
  };
};

// 268
export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note,
  },
});

// 280
export const addNewNote = (id, note) => ({
  type: types.notesAddNew,
  payload: { id, ...note },
});

// 269
export const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes,
});

// 270
export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    // 262
    dispatch(setNotes(notes));
  };
};

// 274
export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    // get the user id
    const { uid } = getState().auth;
    // if url is null, delete the propertie
    if (!note.url) delete note.url;

    const noteToFirestore = { ...note };
    // delete the id
    delete noteToFirestore.id;

    // update the note
    const noteRef = doc(db, `${uid}/journal/notes/${note.id}`);
    await updateDoc(noteRef, noteToFirestore);

    // call refresh note to update the notes array
    dispatch(refreshNote(note.id, noteToFirestore));
    Swal.fire("Saved", note.title, "success");
  };
};

// 274
export const refreshNote = (id, note) => ({
  type: types.notesUpdated,
  payload: { id, note: { id, ...note } },
});

// 277
export const startUploading = (file) => {
  return async (dispatch, getState) => {
    // get the active note
    const { activeNote } = getState().notes;
    // fire the alert
    Swal.fire({
      title: "Uploading...",
      text: "Please wait...",
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });
    // launch file upload and get the file url
    const fileUrl = await fileUpload(file);
    // save the url as prop
    activeNote.url = fileUrl;
    // close alert
    Swal.close();
    // save the note
    dispatch(startSaveNote(activeNote));
  };
};

// 279
export const startDeleting = (id) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    const noteRef = doc(db, `${uid}/journal/notes/${id}`);
    await deleteDoc(noteRef);

    dispatch(deleteNote(id));
  };
};

// 279
export const deleteNote = (id) => ({
  type: types.notesDelete,
  payload: id,
});

// 273
export const noteLogout = () => ({
  type: types.notesLogoutCleaning,
});
