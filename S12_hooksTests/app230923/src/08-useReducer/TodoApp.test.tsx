import { render, screen } from "@testing-library/react";

import { TodoApp } from "./TodoApp";
import { Mock, vi } from "vitest";
import { useTodos } from "./hooks/useTodo";

// Mock the useTodos hook
vi.mock("./hooks/useTodo");

describe("TodoApp", () => {
  (useTodos as Mock).mockReturnValue({
    todos: [
      { id: 1, description: "Todo #1", done: false },
      { id: 2, description: "Todo #2", done: true },
    ],
    todosCount: 2,
    pendingTodosCount: 1,
    handleDeleteTodo: vi.fn(),
    handleToggleTodo: vi.fn(),
    handleNewTodo: vi.fn(),
  });

  test.only("renders the TodoApp component", () => {
    render(<TodoApp />);
    screen.debug();

    expect(screen.getByText("Todo #1")).toBeTruthy();
    expect(screen.getByText("Todo #2")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
