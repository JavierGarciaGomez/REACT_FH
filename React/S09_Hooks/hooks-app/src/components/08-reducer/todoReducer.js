// 125, 127
export const todoReducer = (state = [], action) => {
  console.log("entering todoReducer", state, action);
  switch (action.type) {
    case "add":
      console.log("im in add,", state);
      return [...state, action.payload];

    case "del":
      return state.filter((todo) => todo.id !== action.payload);

    case "toggle":
      return state.map((todo) => {
        console.log("here");
        if (todo.id === action.payload) {
          todo.done = true;
        }
        return todo;
      });

    default:
      return state;
  }
};
