import { describe, expect, test, vi } from "vitest";
import { AddCategory } from "../../components";
import { fireEvent, render, screen } from "@testing-library/react";

describe("", () => {
  test("It should change the value of the textbox", () => {
    render(<AddCategory onAddCategory={() => {}} />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.input(input, { target: { value: "Morgana" } });
    expect(input.value).toBe("Morgana");
  });
  test("It should call onAddCategory if the input has a value", () => {
    const inputValue = "Morgana";
    const onAddCategory = vi.fn();

    render(<AddCategory onAddCategory={onAddCategory} />);

    const input = screen.getByRole("textbox") as HTMLInputElement;
    const form = screen.getByRole("form") as HTMLFormElement;

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    // screen.debug();
    expect(input.value).toBe("");

    expect(onAddCategory).toHaveBeenCalled();
    expect(onAddCategory).toHaveBeenCalledTimes(1);
    expect(onAddCategory).toHaveBeenCalledWith(inputValue);
  });

  test("It should not call onAddCategory if the input is empty", () => {
    const inputValue = "";
    const onAddCategory = vi.fn();

    render(<AddCategory onAddCategory={onAddCategory} />);

    const input = screen.getByRole("textbox") as HTMLInputElement;
    const form = screen.getByRole("form") as HTMLFormElement;

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    // screen.debug();
    expect(input.value).toBe("");

    expect(onAddCategory).toHaveBeenCalledTimes(0);
    expect(onAddCategory).not.toHaveBeenCalled();
  });
});
