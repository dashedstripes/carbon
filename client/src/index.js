import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, IndexRoute, Route, Link, Switch } from 'react-router-dom'
import store from './store'
import App from './components/App'
import TodoList from './components/TodoList'
import PageNotFound from './components/PageNotFound'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Switch>
          <Route path='/' exact component={TodoList}/>
          <Route component={PageNotFound}/>
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>, document.getElementById('app')) 