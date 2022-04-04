import { REMOVE_TODO, ADD_TODO, NEW_TODO } from '../types/types'

export const AddTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo
})

export const CreateNewTodo = (todo) => ({
    type: NEW_TODO,
    payload: todo
})

export const RemoveTodo = (todo, i) => ({
    type: REMOVE_TODO,
    payload: [todo, i]
})