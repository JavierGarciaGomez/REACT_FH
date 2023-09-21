import { TodoItem } from "./TodoItem";
import { Todo } from "./types/types";

type Props = {
  todos: Todo[];
  handleRemoveTodo: (id: number) => void;
  handleToggleTodo: (id: number) => void;
};
export const TodoList = ({
  todos,
  handleRemoveTodo,
  handleToggleTodo,
}: Props) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleRemoveTodo={handleRemoveTodo}
          handleToggleTodo={handleToggleTodo}
        />
      ))}
    </ul>
  );
};
