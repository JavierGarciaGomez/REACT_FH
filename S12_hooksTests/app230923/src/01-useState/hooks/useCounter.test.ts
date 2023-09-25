import { act, renderHook } from "@testing-library/react";
import useCounter from "./useCounter";

describe("test", () => {
  test("it should return the default value", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, decrement, increment, reset } = result.current;
    expect(counter).toBe(1);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("it should return the value passed as param", () => {
    const { result } = renderHook(() => useCounter(10));
    const { counter } = result.current;
    expect(counter).toBe(10);
  });

  test("it should increment counter by 1", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    expect(result.current.counter).toBe(2);
  });

  test("should increment counter by a custom number", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment(5);
      result.current.increment();
    });
    expect(result.current.counter).toBe(7);
  });

  test("should decrement counter by 1", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.decrement();
    });
    expect(result.current.counter).toBe(0);
  });

  test("should decrement counter by a custom number", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.decrement(3);
    });
    expect(result.current.counter).toBe(-2);
  });

  test("should reset counter to 0", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment(5);
      result.current.reset();
    });
    expect(result.current.counter).toBe(1);
  });
});
