// 148
import { renderHook, act } from "@testing-library/react-hooks";

import { useForm } from "../../hooks/useForm";

describe("Pruebas en useForm", () => {
  const initialForm = {
    name: "Javi",
    email: "javi@javi.com",
  };

  //
  test("debe regresar un formulario por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [values, handleInputChange, reset] = result.current;
    expect(values).toEqual(initialForm);
    expect(typeof handleInputChange).toBe("function");
    expect(typeof reset).toBe("function");
  });

  test("debe cambiar el valor del formulario (cambiar name)", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;

    const newName = "Pedro";

    act(() => {
      handleInputChange({ target: { name: "name", value: newName } });
    });
    const [values] = result.current;
    console.log("printing values", values);

    expect(values).toEqual({ ...initialForm, name: newName });
  });

  test("debe restablecer el formulario con reset", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;
    const newName = "Pedro";

    act(() => {
      handleInputChange({ target: { name: "name", value: newName } });
      reset();
    });
    const [values] = result.current;

    expect(values).toEqual(initialForm);
  });
});
