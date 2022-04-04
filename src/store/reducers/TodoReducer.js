import { REMOVE_TODO, ADD_TODO, NEW_TODO } from '../types/types'

const initialState = {
    todos: [
        'Reorganize kitchen gadgets',
        'Reorganize kitchen cabinets',
        'Reorganize kithen schelves',
    ],
    newTodo: '',
}

const TodoReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TODO:
            return { ...state, todos: [...state.todos, action.payload] }
        case NEW_TODO:
            return { ...state, newTodo: action.payload }
        case REMOVE_TODO:
            return { ...state }
                // todos: state.todos.filter((v,i) =>  i!==action.payload)}
        default:
            return {...state}
    }
}

export default TodoReducer