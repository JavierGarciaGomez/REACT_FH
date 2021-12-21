// 124

const initialState = [{
    id:1, 
    todo: 'Comprar pan',
    done:false
}]

// la action es lo que cambia el state
const todoReducer = (state = initialState, action) => {
    if(action?.type==='add'){
        return [...state, action.addTodo]
    }
    return state;
}

let todos = todoReducer();

// agregar elementos
const newTodo = {
    id: 2,
    todo: 'Vender pan',
    done: false
}

const addTodo = {
    type: 'add',
    payload: newTodo
}

todos = todoReducer(todos, addTodo)



console.log(todos)