import { getSaludo } from "./base-pruebas/02-template-string";
import { getUser, getUsuarioActivo } from "./base-pruebas/05-funciones";

describe("Tests", () => {
  test("Test 52", () => {
    expect(true).toBeTruthy();
  });

  test("Test 53 toBe", () => {
    const message1 = "Hey";
    const message2 = "Hey";

    expect(message1).toBe(message2);
  });

  it("test 55. toBe function", () => {
    expect(getSaludo("Javi")).toBe("Hola Javi");
  });
  it("test 56 objects", () => {
    const expected = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const name = "randomName";
    const expected2 = {
      uid: "ABC567",
      username: name,
    };
    expect(getUser()).toEqual(expected);
    expect(getUsuarioActivo(name)).toEqual(expected2);
  });
});
