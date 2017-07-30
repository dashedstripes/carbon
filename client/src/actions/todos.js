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