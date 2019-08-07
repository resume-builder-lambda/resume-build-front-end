import React from 'react'
import { Switch, Route } from 'react-router-dom'

import LogIn from './Components/LogIn'
import Register from './Components/Register'
import PrivateRoute from './Components/PrivateRoute'
import Dashboard from './Components/Dashboard'

import './App.scss'

const App = props => {

  return (

    <div className="App">
      <Switch>
        <Route exact path="/"
          render={props => {
            return (<LogIn {...props} />)
          }} />

        <Route path="/register"
          component={Register}
        />

        <PrivateRoute
          path="/dashboard"
          component={() => <Dashboard data={props.data} />}
        />

        <Route path="admin"
          render={props => { return (<LogIn {...props} admin={true} />) }} />
      </Switch>
    </div>

  )

}

export default App
