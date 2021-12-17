// 54
import "@testing-library/jest-dom";
import { retornaArreglo } from "../../base-pruebas/07-deses-arr";

describe("pruebas en 7-desesArr", () => {
  test("debe retornar un string y un número ", () => {
    const arr = retornaArreglo();
    const arrTest = ["ABC", 123];
    expect(arr).toEqual(arrTest);
  });
});
