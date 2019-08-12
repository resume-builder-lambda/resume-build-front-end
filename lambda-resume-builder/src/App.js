import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Cookies from 'js-cookie'

import LogIn from './Components/LogIn'
import Register from './Components/Register'
import PrivateRoute from './Components/PrivateRoute'

import './App.scss'

const App = props => {

  window.addEventListener('beforeunload', () => Cookies.remove('location'))

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

        {/* <PrivateRoute
          path="/dashboard"
          component={() => <Dashboard data={props.data} />}
        /> */}

        <PrivateRoute path="/dashboard" />

        <Route
          exact path='/admin'
          render={props => <Register {...props} admin={true} />}
        />

        <PrivateRoute path="/admin/dashboard" />

      </Switch>

    </div>

  )
}

export default App
