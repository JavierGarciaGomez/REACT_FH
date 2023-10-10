import { Dispatch } from "redux";
import { RootState } from "..";
import { Note } from "../../types/storeTypes";
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { firebaseDB } from "../../firebase/config";
import {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setPhotosToActiveNote,
  setSaving,
  updateNote,
  deleteNoteById,
} from ".";
import { loadNotes } from "../../utils";
import { fileUpload } from "../../utils/fileUpload";

export const startNewNote = () => {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    dispatch(setSaving());
    const { uid } = getState().authReducer;

    const newNote: Note = {
      body: "",
      date: new Date().getTime(),
      title: "title",
      imageUrls: [],
    };

    const newDoc = doc(collection(firebaseDB, `${uid}/journal/notes`));
    await setDoc(newDoc, newNote);

    newNote.id = newDoc.id;

    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  };
};

export const startLoadingNotes = () => {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    const { uid } = getState().authReducer;
    if (!uid) throw new Error("Not existent user");

    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const startSavingNote = () => {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    dispatch(setSaving());

    const { uid } = getState().authReducer;
    const { activeNote } = getState().journalReducer;

    const noteToFireStore = { ...activeNote };
    delete noteToFireStore.id;

    const docRef = doc(firebaseDB, `${uid}/journal/notes/${activeNote!.id}`);

    await setDoc(docRef, noteToFireStore, { merge: true });

    dispatch(updateNote(activeNote!));
  };
};

export const startUploadingFiles = (files: FileList) => {
  return async (dispatch: Dispatch) => {
    dispatch(setSaving());
    const fileUploadPromises = [];
    for (const file of files) {
      fileUploadPromises.push(fileUpload(file));
    }

    const photosUrls = await Promise.all(fileUploadPromises);

    dispatch(setPhotosToActiveNote(photosUrls));
  };
};

export const startDeletingNote = () => {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    const { uid } = getState().authReducer;
    const { activeNote } = getState().journalReducer;

    const docRef = doc(firebaseDB, `${uid}/journal/notes/${activeNote!.id}`);
    await deleteDoc(docRef);

    dispatch(deleteNoteById(activeNote!.id!));
  };
};
