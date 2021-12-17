// 50
describe("Pruebas en el archivo demo.test.js", () => {
  test("Esta es mi primera pureba", () => {
    const isActive = true;
    if (!isActive) {
      throw new Error("No esta activo");
    }
  });

  // 51
  test("Los strings", () => {
    // inicialización
    const mensaje = "mensaje prueba";

    //   estímulo
    const mensaje2 = `mensaje prueba`;

    //   comportamiento
    expect(mensaje).toBe(mensaje2);
  });
});
