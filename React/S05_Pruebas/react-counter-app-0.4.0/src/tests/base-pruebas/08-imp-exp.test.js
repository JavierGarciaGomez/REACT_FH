// 54
import "@testing-library/jest-dom";
import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heros";

describe("pruebas en 8-imp-ext", () => {
  test("debe retornar un héroe por id ", () => {
    const id = 1;
    const heroe = getHeroeById(id);
    const testHeroe = heroes[0];
    expect(heroe).toEqual(testHeroe);
  });

  test("debe retornar undefined ", () => {
    const id = 30;
    const heroe = getHeroeById(id);
    const testHeroe = undefined;
    expect(heroe).toEqual(testHeroe);
  });

  test("debe retornar héroes de Marvel ", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);
    const testHeroes = [
      {
        id: 2,
        name: "Spiderman",
        owner: "Marvel",
      },

      {
        id: 5,
        name: "Wolverine",
        owner: "Marvel",
      },
    ];
    expect(heroes).toEqual(testHeroes);
  });

  test("debe retornar número de héroes de DC ", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);
    const numDCheroes = 3;
    expect(heroes.length).toBe(numDCheroes);
  });
});
