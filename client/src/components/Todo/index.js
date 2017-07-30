import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editTodo, deleteTodo } from '../../actions/todos'

class Todo extends Component {

  handleClick(e) {
    this.props.dispatch(deleteTodo(this.props.id))
    fetch(`/api/v1/todos/${this.props.id}`, {
      method: 'DELETE'
    }).then((res) => {
      return res.json()
    }).then((val) => {
      console.log(val)
    })
  }

  handleChange(e) {
    this.props.dispatch(editTodo({
      id: this.props.id,
      action: e.target.value
    }))

    fetch(`/api/v1/todos/${this.props.id}`, {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify({
        action: e.target.value
      })
    }).then((res) => {
      return res.json()
    }).catch((err) => {
      console.log(err)
    }).then((res) => {
      console.log(res)
    })
  }

  render() {
    return (
      <li className="Todo">
        <input type="text" value={ this.props.action } onChange={this.handleChange.bind(this)}/>
        <button onClick={this.handleClick.bind(this)}>Delete</button>
      </li>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(Todo)
