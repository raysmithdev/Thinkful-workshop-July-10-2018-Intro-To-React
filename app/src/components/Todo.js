import React from 'react'

function Todo(props) {
  return (
    <li>
      {props.text}
      <button onClick={() => props.handleDelete(props.index)}>Delete</button>
    </li>
  )
}

export default Todo
