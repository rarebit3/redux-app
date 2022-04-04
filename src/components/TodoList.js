import { connect } from 'react-redux'
import { AddTodo, CreateNewTodo, RemoveTodo } from '../store/actions/TodoActions'
import TodoForm from './TodoForm'

const TodoList = (props) => {
    console.log(props)
    
    const handleChange = (event) => {}

    const handleSubmit = (e) => {
        e.preventDefault()

      };

    return (
        <div>
            <TodoForm 
            newTodo={props.todoState.newTodo}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            />
            {props.todoState.todos.map((todo, i) => (
                <li key={i}>{todo}</li>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todoState: state.todoState
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        addTodo: (newTodo) => dispatch(AddTodo(newTodo)),
        removeTodo: (index) => dispatch(RemoveTodo(index)),
        newTodo: (formValue) => dispatch(CreateNewTodo(formValue))
    }
}

export default connect(mapStateToProps, mapActionsToProps)(TodoList)