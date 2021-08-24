// 148
import { renderHook, act } from "@testing-library/react-hooks";
import { useFetch } from "../../hooks/useFetch";

describe("Pruebas en useFetch", () => {
  //
  test("debe retornar información por defecto", () => {
    const url = `https://www.breakingbadapi.com/api/quotes`;
    const { result } = renderHook(() => useFetch());
    console.log("printing result", result.current);
    const state = result.current;

    const defaultState = { data: null, loading: true };
    console.log("printing default state", defaultState);
    console.log("printing state", state);
    expect(state).toEqual(defaultState);
  });
});
