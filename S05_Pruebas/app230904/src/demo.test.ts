import { getSaludo } from "./base-pruebas/02-template-string";
import { getUser, getUsuarioActivo } from "./base-pruebas/05-funciones";
import { usContext } from "./base-pruebas/06-deses-obj";
import { retornaArreglo } from "./base-pruebas/07-deses-arr";
import { getHeroeById, getHeroesByOwner } from "./base-pruebas/08-imp-exp";
import { getHeroeByIdAsync } from "./base-pruebas/09-promesas";

describe("Tests", () => {
  test("Test 52", () => {
    expect(true).toBeTruthy();
  });

  test("Test 54 toBe", () => {
    const message1 = "Hey";
    const message2 = "Hey";

    expect(message1).toBe(message2);
  });

  it("test 56. toBe function", () => {
    expect(getSaludo("Javi")).toBe("Hola Javi");
  });
  it("test 57 objects", () => {
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

  it("58. Objects", () => {
    const newContext = usContext({
      clave: "01",
      nombre: "John",
      edad: 24,
      rango: "Lieutenant",
    });
    expect(newContext).toEqual({
      nombreClave: "01",
      anios: 24,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
      nombre: "John",
      rango: "Lieutenant",
    });
  });

  it("58. desest arrays", () => {
    const array = retornaArreglo();
    const [text, numbers] = array;

    expect(array).toEqual(["ABC", 123]);
    expect(text).toBe("ABC");
    expect(numbers).toBe(123);
    expect(typeof text).toBe("string");
    expect(typeof numbers).toBe("number");
  });

  it("59. Imp and Exp", () => {
    const hero = getHeroeById(3);
    const heros2 = getHeroesByOwner("DC");

    const herosOwner = heros2.map((hero) => hero.owner);
    const areAllOwnersDC = herosOwner.every((owner) => owner === "DC");
    expect(areAllOwnersDC).toBe(true);

    expect(hero).toEqual({
      id: 3,
      name: "Superman",
      owner: "DC",
    });
  });

  it("60. Async", async () => {
    const hero = await getHeroeByIdAsync(3);
    expect(hero).toEqual({
      id: 3,
      name: "Superman",
      owner: "DC",
    });
  });

  it("60. Async it should fails", async () => {
    try {
      await getHeroeByIdAsync(20);
    } catch (error) {
      expect(error).toBe("No se pudo encontrar el héroe 20");
    }
  });

  // it("61. Async await giphy", async () => {
  //   const imgUrl = await getImagen();
  //   expect(imgUrl.includes("https://")).toBe(true);
  // });

  // it("62. Async await giphy failing", async () => {
  //   try {
  //     await getImagen(false);
  //   } catch (error) {
  //     expect(error).toBe("No sirve paps");
  //   }
  // });
});
