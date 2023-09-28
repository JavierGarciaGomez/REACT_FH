import { db } from "../firebase/firebase-config";

// 262
export const loadNotes = async (uid) => {
  const notesSnap = await db.collection(`${uid}/journal/notes`).get();
  const notes = [];
  // console.log("printing note snap", notesSnap);
  notesSnap.forEach((snapHijo) => {
    notes.push({ id: snapHijo.id, ...snapHijo.data() });
  });
  // console.log(notes);
  return notes;
};
