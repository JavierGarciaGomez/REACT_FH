import { todoReducer } from "../../../components/08-reducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Pruebas en todoReducer", () => {
  test("debe de retornar el estado por defecto", () => {
    // in this case the default case is return the state as entered it as a parameter
    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos);
  });

  test("debe de agregar un TODO", () => {
    const newTodo = { id: 4, desc: "cocinar", donde: true };
    const state = todoReducer(demoTodos, { type: "add", payload: newTodo });

    expect(state.length).toBe(demoTodos.length + 1);
    expect(state).toEqual([...demoTodos, newTodo]);
  });

  test("debe de borrar un TODO", () => {
    const state = todoReducer(demoTodos, { type: "del", payload: 1 });

    expect(state.length).toBe(demoTodos.length - 1);
    expect(state).toEqual([demoTodos[1]]);
  });

  test("debe de hacer el TOGGLE del TODO", () => {
    const state = todoReducer(demoTodos, { type: "toggle", payload: 1 });
    expect(state[0].done).toBe(!demoTodos[0].done);
    expect(state[1]).toEqual(demoTodos[1]);
  });
});
