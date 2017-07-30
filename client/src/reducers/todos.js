const todos = (state = [], action) => {
  switch(action.type) {
    case 'SET_TODOS':
      return Object.assign([], action.payload)
    case 'ADD_TODO':
      let newState = Object.assign([], state)
      newState.push({action: action.payload})
      return newState
  }
  return state
}

export default todos