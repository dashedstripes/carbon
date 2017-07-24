import { createStore } from 'redux'
import rootReducer from './reducers'

let store = createStore(rootReducer)

store.subscribe(() => {
  console.log(store.getState())
})

module.exports = store