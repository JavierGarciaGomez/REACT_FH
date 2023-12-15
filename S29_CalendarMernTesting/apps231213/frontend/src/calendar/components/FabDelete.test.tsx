import { fireEvent, render, screen } from "@testing-library/react";
import { FabDelete } from "./FabDelete";
import { useCalendarStore } from "../../../src/hooks/useCalendarStore";
import { Mock, beforeEach, describe, expect, test, vi } from "vitest";

vi.mock("../../../src/hooks/useCalendarStore");

describe("Pruebas en <FabDelete />", () => {
  const mockStartDeletingEvent = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("debe de mostrar el componente correctamente", () => {
    (useCalendarStore as Mock).mockReturnValue({
      hasEventSelected: false,
    });

    render(<FabDelete />);

    const btn = screen.getByLabelText("btn-delete");
    const classList = btn.classList.toString();
    expect(classList).toContain("btn");
    expect(classList).toContain("btn-danger");
    expect(classList).toContain("fab-danger");
    expect(btn.style.display).toBe("none");
  });

  test("debe de mostrar el botón si hay un evento activo", () => {
    (useCalendarStore as Mock).mockReturnValue({
      hasEventSelected: true,
    });

    render(<FabDelete />);

    const btn = screen.getByLabelText("btn-delete");
    // console.log(btn.classList.toString());
    expect(btn.style.display).toBe("");
  });

  test("debe de llamar startDeletingEvent si hay evento activo", () => {
    (useCalendarStore as Mock).mockReturnValue({
      hasEventSelected: true,
      startDeletingEvent: mockStartDeletingEvent,
    });

    render(<FabDelete />);

    const btn = screen.getByLabelText("btn-delete");
    fireEvent.click(btn);

    expect(mockStartDeletingEvent).toHaveBeenCalledWith();
  });
});
