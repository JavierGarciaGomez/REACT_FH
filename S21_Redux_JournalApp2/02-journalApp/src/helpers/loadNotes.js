// 269
import { db } from "../firebase/firebase-config";
import { collection, getDocs, query } from "firebase/firestore";

// 269
export const loadNotes = async (uid) => {
  const notesSnap = await getDocs(
    query(collection(db, `${uid}/journal/notes`))
  );

  const notes = [];
  console.log("printing note snap", notesSnap);

  notesSnap.forEach((note) => {
    notes.push({
      id: note.id,
      ...note.data(),
    });
  });

  console.log("loadnotes ", notes);
  return notes;
};
