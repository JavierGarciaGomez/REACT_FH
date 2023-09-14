import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe("Test useFetchGifs", () => {
  test("It should return the initial state", () => {
    const { result } = renderHook(() => useFetchGifs("Morgana"));
    const { gifs, loading } = result.current;
    expect(gifs.length).toBe(0);
    expect(loading).toBeTruthy();
  });

  test("it should return an array of images and loading in false", async () => {
    const { result } = renderHook(() => useFetchGifs("Morgana"));
    await waitFor(() => expect(result.current.gifs.length).toBeGreaterThan(0));
    const { gifs, loading } = result.current;
    expect(gifs.length).toBeGreaterThan(0);
    expect(loading).toBeFalsy();
  });
});
