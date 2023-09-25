import { fireEvent, render, screen } from "@testing-library/react";
import { Mock, describe, test, vi } from "vitest";
import { MultipleCustomHooks } from "./MultipleCustomHooks";
import { useFetch } from "./hooks/useFetch";
import useCounter from "../01-useState/hooks/useCounter";

vi.mock("./hooks/useFetch");
vi.mock("../01-useState/hooks/useCounter");

describe("tests pm <MultipleCustomHooks/>", () => {
  const mockIncrement = vi.fn();

  (useCounter as Mock).mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("should show the component by default", () => {
    (useFetch as Mock).mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText("Loading..."));
    expect(screen.getByText("MultipleCustomHooks"));
    const nextButton: HTMLButtonElement = screen.getByRole("button", {
      name: "Next quote",
    });
    expect(nextButton.disabled).toBeTruthy();
  });

  test("should show a quote", () => {
    (useFetch as Mock).mockReturnValue({
      data: { id: 12, title: "a title", body: "a body", userId: "23" },
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHooks />);

    expect(screen.getByText("a title")).toBeTruthy();
    expect(screen.getByText("a body")).toBeTruthy();

    const nextButton: HTMLButtonElement = screen.getByRole("button", {
      name: "Next quote",
    });
    expect(nextButton.disabled).toBeFalsy();
  });

  test("should call increment function", () => {
    (useFetch as Mock).mockReturnValue({
      data: { id: 12, title: "a title", body: "a body", userId: "23" },
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole("button", { name: "Next quote" });
    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
