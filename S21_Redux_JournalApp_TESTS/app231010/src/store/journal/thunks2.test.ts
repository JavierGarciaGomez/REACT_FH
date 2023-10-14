import { beforeEach, describe, expect, test, vi } from "vitest";
import { addNewEmptyNote, setActiveNote, setSaving, startNewNote } from ".";

import * as FirebaseFirestoreLite from "firebase/firestore/lite";

vi.mock("../../firebase/providers");

vi.mock("firebase/firestore/lite", async () => {
  const mod: typeof FirebaseFirestoreLite = await vi.importActual(
    "firebase/firestore/lite"
  );
  return {
    ...mod,
    setDoc: () => vi.fn(),
    deleteDoc: vi.fn(),
  };
});

describe("AuthThunks", () => {
  const dispatch = vi.fn();
  const getState = vi.fn();
  beforeEach(() => {});

  test.only("startNewNote", async () => {
    const uid = "TEST-UID";

    getState.mockReturnValue({ authReducer: { uid: uid } });

    await startNewNote()(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith(setSaving());
    expect(dispatch).toHaveBeenCalledWith(
      addNewEmptyNote({
        body: "",
        title: "title",
        date: expect.any(Number),
        imageUrls: [],
        id: expect.any(String),
      })
    );
    expect(dispatch).toHaveBeenCalledWith(
      setActiveNote({
        body: "",
        title: "title",
        id: expect.any(String),
        date: expect.any(Number),
        imageUrls: [],
      })
    );
  });
});
