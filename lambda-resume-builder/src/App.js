import React, { Component } from 'react';
import LogIn from './Components/LogIn'
import Navigation from './Components/Navigation'
import Dashboard from './Components/Dashboard'
import Checkout from './Components/OnBoarding/Checkout'
import './App.css';
import Register from './Components/Register';


class App extends Component {
  render() {
    return (
      <div className="App">

        {/* <Dashboard /> */}
        <Register/>


      </div>
    );
  }
}

export default App;
