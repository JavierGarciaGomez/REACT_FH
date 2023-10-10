import { collection, getDocs } from "firebase/firestore/lite";
import { firebaseDB } from "../firebase/config";
import { Note } from "../types/storeTypes";

export const loadNotes = async (uid = "") => {
  if (!uid) throw new Error("El UID del usuario no existe");

  const collectionRef = collection(firebaseDB, `${uid}/journal/notes`);
  const docs = await getDocs(collectionRef);

  const notes: Note[] = [];
  docs.forEach((doc) => {
    notes.push({ id: doc.id, ...doc.data() } as Note);
  });

  return notes;
};
