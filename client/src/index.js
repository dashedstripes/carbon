import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, IndexRoute, Route, Link, Switch } from 'react-router-dom'
import store from './store'
import App from './components/App'
import TodoList from './components/TodoList'
import PageNotFound from './components/PageNotFound'

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Component>
          <Switch>
            <Route path='/' exact component={TodoList}/>
            <Route component={PageNotFound}/>
          </Switch>
        </Component>
      </BrowserRouter>
    </Provider>, document.getElementById('app')) 
}

render(App)

if (module.hot) {
  module.hot.accept()
}