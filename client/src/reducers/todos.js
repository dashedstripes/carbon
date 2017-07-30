const todos = (state = [], action) => {
  switch(action.type) {
    case 'SET_TODOS':
      return Object.assign([], action.payload)
    case 'ADD_TODO':
      return Object.assign([], state).concat(action.payload)
    case 'EDIT_TODO':
      return Object.assign([], state).map((val) => {
        if(val.id == action.payload.id) {
          val.action = action.payload.action
        }
        return val
      })
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