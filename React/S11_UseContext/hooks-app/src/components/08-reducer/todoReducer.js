// 125, 127, 128, 129, 130
export const todoReducer = (state = [], action) => {
  console.log("entering todoReducer", state, action);
  switch (action.type) {
    case "add":
      console.log("im in add,", state);
      return [...state, action.payload];

    //   129
    case "del":
      return state.filter((todo) => todo.id !== action.payload);

    //   130
    case "toggle":
      return state.map((todo) =>
        todo.id === action.payload
          ? {
              ...todo,
              done: !todo.done,
            }
          : todo
      );

    //   130
    case "toggle-old":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        } else {
          return todo;
        }
      });

    default:
      return state;
  }
};
