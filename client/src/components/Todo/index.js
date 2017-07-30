import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../../actions/todos'

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

  render() {
    return (
      <li className="Todo">
        { this.props.action }
        <button onClick={this.handleClick.bind(this)}>Delete</button>
      </li>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(Todo)
