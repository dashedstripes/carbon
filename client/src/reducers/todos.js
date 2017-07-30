const todos = (state = [], action) => {
  switch(action.type) {
    case 'SET_TODOS':
      return Object.assign([], action.payload)
    case 'ADD_TODO':
      return Object.assign([], state).concat(action.payload)
    case 'DELETE_TODO':
      return Object.assign([], state).filter((val) => {
        if(val.id !== action.id) {
          return val
        }
      })
  }
  return state
}

export default todos