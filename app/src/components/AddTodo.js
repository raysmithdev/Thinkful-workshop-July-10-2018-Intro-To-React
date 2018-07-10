import React from 'react'

// stateless / dumb / presentational component
function AddTodo(props) {
  // console.log(props);
  return (
    <form onSubmit={(event) => {
      event.preventDefault()

      let userInput = event.target.userInput.value

      props.handleSubmit(userInput)

      event.target.userInput.value = ''
    }}>
      <input type="text" name="userInput" />
      <button>Submit</button>
    </form>
  )
}

export default AddTodo
