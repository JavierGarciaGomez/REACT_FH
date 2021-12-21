import React from "react";
import { shallow } from "enzyme";
import { TodoList } from "../../../components/08-reducer/TodoList";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Pruebas en <TodoList />", () => {
  const handleDelete = jest.fn();
  const handleComplete = jest.fn();

  const wrapper = shallow(
    <TodoList
      todos={demoTodos}
      handleDelete={handleDelete}
      handleToggle={handleComplete}
    />
  );

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de tener dos <TodoListItem />", () => {
    expect(wrapper.find("TodoListItem").length).toBe(demoTodos.length);

    expect(wrapper.find("TodoListItem").at(0).prop("handleDelete")).toEqual(
      expect.any(Function)
    );
  });
});
