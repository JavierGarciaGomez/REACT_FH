import { beforeEach, describe, expect, test, vi } from "vitest";
import { addNewEmptyNote, setActiveNote, setSaving, startNewNote } from ".";

import { collection, deleteDoc, getDocs } from "firebase/firestore/lite";
import { firebaseDB } from "../../firebase/config";

vi.mock("../../firebase/providers");

describe("AuthThunks", () => {
  const dispatch = vi.fn();
  const getState = vi.fn();
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test.only("startNewNote", async () => {
    const uid = "TEST-UID";
    getState.mockReturnValue({ authReducer: { uid: uid } });
    await startNewNote()(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith(setSaving());

    const expectedNote = {
      body: "",
      title: "title",
      date: expect.any(Number),
      imageUrls: [],
      id: expect.any(String),
    };
    expect(dispatch).toHaveBeenCalledWith(addNewEmptyNote(expectedNote));
    expect(dispatch).toHaveBeenCalledWith(setActiveNote(expectedNote));

    const collectionRef = collection(firebaseDB, `${uid}/journal/notes`);
    const docs = await getDocs(collectionRef);

    const deletePromises: Promise<void>[] = [];
    docs.forEach((doc) => deletePromises.push(deleteDoc(doc.ref)));
    await Promise.all(deletePromises);
  });
});
