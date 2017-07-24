import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setTodos } from '../../actions/todos'
import Todo from '../Todo'

class TodoList extends Component {
  constructor(props) {
    super(props)
    fetch(`/api/v1/todos`).then((res) => {
      return res.json()
    }).then((todos) => {
      this.props.dispatch(setTodos(todos))
    })
  }

  render() {
    return (
      <div className="TodoList">
        <h3>Todo List</h3>
        <ul>
          { this.props.todos.map((todo, index) => {
            return (
              <Todo key={index} action={todo.action} />
            )
          }) }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(TodoList)
