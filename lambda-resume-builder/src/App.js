import React from 'react'
import { Route } from 'react-router-dom'
import LogIn from './Components/LogIn'
import Register from './Components/Register'
import PrivateRoute from './Components/PrivateRoute'
import Dashboard from './Components/Dashboard'


import './App.scss'

const App = props => {

  return (

    <div className="App">

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

    </div>

  )

}

export default App
