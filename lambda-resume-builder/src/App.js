import React from 'react'
import { Route, Switch } from 'react-router-dom'

import LogIn from './Components/LogIn'
import Register from './Components/Register'
import PrivateRoute from './Components/PrivateRoute'

import './App.scss'

const App = props => {

  return <div className="App">

    <Switch>

      <Route
        exact path="/"
        render={props => <LogIn {...props} />}
      />

      <Route path="/register"
        render={props => <Register {...props} admin={false} />}
      />

      <PrivateRoute path="/dashboard" />

      <Route
        exact path='/admin'
        render={props => <Register {...props} admin={true} />}
      />

      <PrivateRoute path="/admin/dashboard" />

    </Switch>

  </div>

}

export default App
