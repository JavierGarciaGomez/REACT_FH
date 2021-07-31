// 54
import "@testing-library/jest-dom";
import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";
import heroes from "../../data/heros";

describe("pruebas en 09-promesas", () => {
  test("debe retornar un héroe async ", (done) => {
    const id = 2;
    const testHeroe = heroes[id - 1];
    console.log(testHeroe);

    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toEqual(testHeroe);
      done();
    });
  });

  test("error si el héroe por id no existe ", (done) => {
    const id = 10;

    getHeroeByIdAsync(id)
      .then((heroe) => {})
      .catch((error) => {
        console.log(error);
        expect(error).toBe("No se pudo encontrar el héroe");
        done();
      });
  });
});
