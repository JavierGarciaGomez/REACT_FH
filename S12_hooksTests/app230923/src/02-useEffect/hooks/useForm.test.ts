import { act, renderHook } from "@testing-library/react";
import { useForm } from "./useForm";
import React from "react";

describe("useForm Hook", () => {
  const initialForm = {
    name: "",
    email: "",
  };

  it("should return default values", () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      formState: initialForm,
      handleInputChange: expect.any(Function),
      handleReset: expect.any(Function),
    });
  });

  it("should handle input change", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { handleInputChange } = result.current;

    const event = {
      target: {
        name: "name",
        value: "John",
      },
    };

    act(() => {
      handleInputChange(event as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.formState.name).toBe("John");
  });

  it("should handle input change for email", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { handleInputChange } = result.current;

    const event = {
      target: {
        name: "email",
        value: "john@example.com",
      },
    };

    act(() => {
      handleInputChange(event as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.formState.email).toBe("john@example.com");
  });

  it("should reset form state", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { handleInputChange, handleReset } = result.current;

    const event = {
      target: {
        name: "email",
        value: "john@doe.com",
      },
    };

    act(() => {
      handleInputChange(event as React.ChangeEvent<HTMLInputElement>);
      handleReset();
    });

    expect(result.current.formState).toEqual(initialForm);
  });
});
