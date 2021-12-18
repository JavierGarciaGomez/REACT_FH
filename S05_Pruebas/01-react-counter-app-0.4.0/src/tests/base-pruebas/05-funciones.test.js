// 53
import "@testing-library/jest-dom";
import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe("pruebas en 5-funciones", () => {
  test("debe retornar un objeto ", () => {
    const usuario = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const userTest = getUser();
    expect(usuario).toEqual(userTest);
  });

  test("debe retornar un objeto con nombre específico ", () => {
    const usuario = {
      uid: "ABC567",
      username: "julio",
    };
    const userTest = getUsuarioActivo("julio");
    expect(usuario).toEqual(userTest);
  });
});
