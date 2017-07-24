const todos = (state = [], action) => {
  switch(action.type) {
    case 'SET_TODOS':
      return Object.assign([], action.payload)
  }
  return state
}

export default todos