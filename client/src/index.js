import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, IndexRoute, Route, Link, Switch } from 'react-router-dom'
import App from './components/App'
import Home from './components/Home'
import PageNotFound from './components/PageNotFound'

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route component={PageNotFound}/>
      </Switch>
    </App>
  </BrowserRouter>, document.getElementById('app'))