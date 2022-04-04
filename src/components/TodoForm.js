const TodoForm = (props) => {

    return (
        <form>
            <input 
            type="text"
            name="newTodo"
            placeholder="Add to Todo list"
            value={props.newTodo}
            onChange={props.handleChange}
            />
            <button 
            type='submit'
            onClick={props.handleSubmit}>
            Add Todo
            </button>
        </form>
    )
}

export default TodoForm