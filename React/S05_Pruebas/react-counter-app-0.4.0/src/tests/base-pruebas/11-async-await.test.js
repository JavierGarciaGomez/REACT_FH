// 54
import "@testing-library/jest-dom";
import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";
import { getImagen } from "../../base-pruebas/11-async-await";
import heroes from "../../data/heros";

describe("pruebas en 11-promesas", () => {
  test("debe retornar el url de la imagen ", async () => {
    const url = await getImagen();
    expect(url.includes("https://")).toBe(true);
  });
});
