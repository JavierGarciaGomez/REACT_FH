// 146
import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";

describe("Pruebas en useCounter", () => {
  // 146
  test("debe retornar valores por defecto", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.state).toBe(10);
    expect(typeof result.current.increment).toBe("function");
    expect(typeof result.current.decrement).toBe("function");
    expect(typeof result.current.reset).toBe("function");
  });

  //   147
  test("debe tener el counter en 1000", () => {
    const { result } = renderHook(() => useCounter(1000));
    expect(result.current.state).toBe(1000);
  });

  //   147
  test("debe incrementar el counter en 1", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;
    act(() => {
      increment();
    });
    expect(result.current.state).toBe(101);
  });

  test("decrement", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;
    act(() => {
      decrement();
    });
    expect(result.current.state).toBe(99);
  });

  test("debe resetear", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment, reset } = result.current;
    act(() => {
      increment();

      reset();
    });
    expect(result.current.state).toBe(100);
  });
});
