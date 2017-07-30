import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions/todos'

class NewTodo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      input: ''
    }
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }

  handleKeyDown(e) {
    // Submit when spacebar is pressed
    if(e.keyCode === 13) {
      this.submit()
    }
  }

  submit(e) {
    fetch('/api/v1/todos', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        action: this.state.input
      })
    }).then((res) => {
      if(!res.ok) {
        throw Error(res.statusText)
      }
      return res.json()
    }).then((json) => {
      this.props.dispatch(addTodo(json))
    }).catch((err) => {
      console.log(err)
    })

    this.setState({
      input: ''
    })
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.input} onChange={this.handleChange.bind(this)} onKeyDown={this.handleKeyDown.bind(this)}/>
        <button onClick={this.submit.bind(this)}>New Todo</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(NewTodo)
