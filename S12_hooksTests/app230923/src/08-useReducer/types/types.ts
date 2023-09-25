export interface Todo {
  id: number;
  description: string;
  done: boolean;
}

export interface AddTodoAction {
  type: "[TODO] add todo";
  payload: Todo;
}

export interface RemoveTodoAction {
  type: "[TODO] remove todo";
  payload: number;
}

export interface ToggleTodoAction {
  type: "[TODO] toggle todo";
  payload: number;
}

export interface UnknownAction {
  type: "[TODO] unknown action";
  payload: undefined;
}

export type TodoAction =
  | AddTodoAction
  | RemoveTodoAction
  | ToggleTodoAction
  | UnknownAction;

export interface TodoPrev {
  id: number;
  todo: string;
  done: boolean;
}

export interface TodoActionPrev {
  type: string;
  payload?: TodoPrev;
}
