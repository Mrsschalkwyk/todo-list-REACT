import React from 'react'


function todoForm(){
    return (
        <form>
            <input type="text" placeholder="Add Todo..." />
        </form>
    );
}
function TodoForm(props) {
  const [newTodo, setNewTodo] = React.useState('')
  const { addTodo } = props

  function handleChange(event) {
    console.log("event target: ", event.target.value)
    setNewTodo(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    addTodo(newTodo)

    // props.addTodo(value)
    setNewTodo("") // clear the placeholder
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="Text" 
        placeholder="Enter a todo"
        onChange={handleChange}
        value={newTodo}
      />
    </form>
  )
}

export default TodoForm