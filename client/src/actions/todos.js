export const setTodos = (payload) => {
  return {
    type: 'SET_TODOS',
    payload
  }
}

export const addTodo = (payload) => {
  return {
    type: 'ADD_TODO',
    payload
  }
}

export const editTodo = (payload) => {
  return {
    type: 'EDIT_TODO',
    payload
  }
}

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    id
  }
}