import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return (
      <li className="Todo">
        { this.props.action }
      </li>
    );
  }
}

export default Todo;
