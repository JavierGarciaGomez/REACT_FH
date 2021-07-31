import "@testing-library/jest-dom";
import { getSaludo } from "../../base-pruebas/02-template-string";

// 52
describe("Pruebas en 02-template-string.js", () => {
  test("getSaludo debe retornar el nombre", () => {
    const nombre = "Javier";
    const saludo = getSaludo(nombre);
    expect(saludo).toBe("Hola " + nombre);
  });

  test("getSaludo debe retornar anónimo", () => {
    const saludo = getSaludo();
    expect(saludo).toBe("Hola anónimo");
  });
});
