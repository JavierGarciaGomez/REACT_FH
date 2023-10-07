import { Dispatch } from "redux";
import { RootState } from "..";
import { Note } from "../../types/storeTypes";
import { collection, doc, setDoc } from "firebase/firestore/lite";
import { firebaseDB } from "../../firebase/config";

export const startNewNote = () => {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    const { uid } = getState().authReducer;
    console.log({ uid });
    const newNote: Note = {
      body: "",
      date: new Date().getTime(),
      id: "xa",
      imageUrls: [],
      title: "title",
    };

    console.log({ firebaseDB });

    const myCollection = collection(firebaseDB, "users");
    console.log({ coll: myCollection });

    const newDoc = doc(collection(firebaseDB, `${uid}/journal/notes`));
    const res = await setDoc(newDoc, newNote);

    console.log({ newDoc, res });
  };
};
