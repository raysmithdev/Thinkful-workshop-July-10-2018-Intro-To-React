import React, { Component } from 'react';
import './App.css';
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

// statefull / smart / container component
class App extends Component {
  constructor() {
    super()

    this.state = {
      todos: [],
      name: 'ray'
    }
  }

  addTodoToState(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  deleteTodoFromState(i) {
    const todos = this.state.todos.filter((todo, index) => index !==  i)

    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="App">
        <AddTodo handleSubmit={(todo) => this.addTodoToState(todo)}/>
        <ul>
          {this.state.todos.map((todo, index) => (
            <Todo handleDelete={(i) => this.deleteTodoFromState(i)} key={index} text={todo} index={index} />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
