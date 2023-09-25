import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "./TodoItem";
import { vi } from "vitest";

describe("<TodoItem/> Tests", () => {
  const mockTodo = {
    id: 1,
    description: "Test Todo",
    done: false,
  };
  const handleRemoveTodoMock = vi.fn();
  const handleToggleTodoMock = vi.fn();

  beforeEach(() => vi.clearAllMocks());

  test("renders TodoItem component with correct text and buttons", () => {
    render(
      <TodoItem
        todo={mockTodo}
        handleRemoveTodo={handleRemoveTodoMock}
        handleToggleTodo={handleToggleTodoMock}
      />
    );

    const todoTextElement = screen.getByText("Test Todo");
    const removeButton = screen.getByText("Borrar");

    expect(todoTextElement).toBeTruthy();
    expect(removeButton).toBeTruthy();
  });

  test("calls handleRemoveTodo when remove button is clicked", () => {
    render(
      <TodoItem
        todo={mockTodo}
        handleRemoveTodo={handleRemoveTodoMock}
        handleToggleTodo={handleToggleTodoMock}
      />
    );

    const removeButton = screen.getByText("Borrar");
    fireEvent.click(removeButton);

    expect(handleRemoveTodoMock).toHaveBeenCalledWith(mockTodo.id);
  });

  test("calls handleToggleTodo when todo text is clicked", () => {
    render(
      <TodoItem
        todo={mockTodo}
        handleRemoveTodo={handleRemoveTodoMock}
        handleToggleTodo={handleToggleTodoMock}
      />
    );

    const todoTextElement = screen.getByText("Test Todo");
    fireEvent.click(todoTextElement);

    expect(handleToggleTodoMock).toHaveBeenCalledWith(mockTodo.id);
  });

  test("should show the pending todo", () => {
    render(
      <TodoItem
        todo={mockTodo}
        handleRemoveTodo={handleRemoveTodoMock}
        handleToggleTodo={handleToggleTodoMock}
      />
    );

    const liElement = screen.getByRole("listitem");
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );

    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("align-self-center");
    expect(spanElement.className).not.toContain("text-decoration-line-through");
  });

  test("should show the completed todo", () => {
    mockTodo.done = true;
    render(
      <TodoItem
        todo={mockTodo}
        handleRemoveTodo={handleRemoveTodoMock}
        handleToggleTodo={handleToggleTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("text-decoration-line-through");
  });
});
