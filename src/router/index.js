import React, { Component } from 'react'
import {
  HashRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import Login from '../views/Login'
import Dashboard from '../views/Dashboard'

export default class Router extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/' render={() =>
            localStorage.getItem('token') ?
            <Dashboard /> :
            <Redirect to='/login'/>
          }/>
        </Switch>
      </HashRouter>
    )
  }
}
