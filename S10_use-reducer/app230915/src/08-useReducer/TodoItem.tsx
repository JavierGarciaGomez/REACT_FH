import { Todo } from "./types/types";

type Props = {
  todo: Todo;
  handleRemoveTodo: (id: number) => void;
  handleToggleTodo: (id: number) => void;
};

export const TodoItem = ({
  todo,
  handleRemoveTodo,
  handleToggleTodo,
}: Props) => {
  return (
    <li
      key={todo.id}
      className="list-group-item d-flex justify-content-between"
    >
      <span
        className={`align-self-center ${
          todo.done ? "text-decoration-line-through" : ""
        }`}
        onClick={() => handleToggleTodo(todo.id)}
      >
        {todo.description}
      </span>
      <button
        className="btn btn-danger"
        onClick={() => handleRemoveTodo(todo.id)}
      >
        Borrar
      </button>
    </li>
  );
};
