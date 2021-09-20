// 283, 286, 287
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import {
  startNewNote,
  startLoadingNotes,
  startSaveNote,
  startUploading,
} from "../../actions/notes";
import { types } from "../../types/types";
import { db } from "../../firebase/firebase-config";
import { fileUpload } from "../../helpers/fileUpload";

// 287
jest.mock("../../helpers/fileUpload", () => ({
  fileUpload: jest.fn(() => {
    return "https://hola-mundo.com/cosa.jpg";
    // return Promise.resolve('https://hola-mundo.com/cosa.jpg');
  }),
}));

const middlewares = [thunk];
// 283
const mockStore = configureStore(middlewares);
// 286
const initState = {
  auth: {
    uid: "TESTING",
  },
  notes: {
    active: {
      id: "KVoewTg1iE4SnqKiJzQX",
      title: "Hola",
      body: "Mundo",
    },
  },
};

// 283
// let store = mockStore(initState);
let store = mockStore({ auth: { uid: "TESTING" } });

describe("Pruebas con las acciones de notes", () => {
  beforeEach(() => {
    store = mockStore(initState);
  });

  // 283, 284
  test("debe de crear una nueva nota startNewNote", async () => {
    await store.dispatch(startNewNote());

    const actions = store.getActions();
    // console.log(actions);

    expect(actions[0]).toEqual({
      type: types.notesActive,
      payload: {
        id: expect.any(String),
        title: "",
        body: "",
        date: expect.any(Number),
      },
    });

    expect(actions[1]).toEqual({
      type: types.notesAddNew,
      payload: {
        id: expect.any(String),
        title: "",
        body: "",
        date: expect.any(Number),
      },
    });

    const docId = actions[0].payload.id;
    await db.doc(`/TESTING/journal/notes/${docId}`).delete();
  });

  // 286
  test("startLoadingNotes debe cargar las notas", async () => {
    await store.dispatch(startLoadingNotes("TESTING"));
    const actions = store.getActions();
    // console.log(actions);
    expect(actions[0]).toEqual({
      type: types.notesLoad,
      payload: expect.any(Array),
    });
    const expected = {
      id: expect.any(String),
      title: expect.any(String),
      body: expect.any(String),
      date: expect.any(Number),
    };
    expect(actions[0].payload[0]).toMatchObject(expected);
  });

  test("startSaveNote debe de actualizar la nota", async () => {
    const note = {
      id: "KVoewTg1iE4SnqKiJzQX",
      title: "titulo!",
      body: "body",
    };
    await store.dispatch(startSaveNote(note));
    const actions = store.getActions();
    // console.log(actions);
    expect(actions[0].type).toBe(types.notesUpdated);
    const docRef = await db.doc(`/TESTING/journal/notes/${note.id}`).get();
    expect(docRef.data().title).toBe(note.title);
  });

  test("startUploading debe de actualizar el url del entry", async () => {
    const file = new File([], "foto.jpg");
    await store.dispatch(startUploading(file));
    const docRef = await db
      .doc("/TESTING/journal/notes/KVoewTg1iE4SnqKiJzQX")
      .get();

    // console.log(docRef);
    expect(docRef.data().url).toBe("https://hola-mundo.com/cosa.jpg");
  });
});
