import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setTodos } from '../../actions/todos'

class TodoList extends Component {
  constructor(props) {
    super(props)
    fetch(`${window.location.origin}/api/v1/todos`).then((res) => {
      return res.json()
    }).then((todos) => {
      this.props.dispatch(setTodos(todos))
    })
  }

  render() {
    return (
      <div className="TodoList">
        TodoList
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(TodoList)
