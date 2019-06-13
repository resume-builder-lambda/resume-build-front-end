import React, { Component } from 'react';
import LogIn from './Components/LogIn/LogIn'
import Navigation from './Components/Navigation/Navigation'
import Dashboard from './Components/Dashboard'
import Checkout from './Components/OnBoarding/Checkout'
import Registration from './Components/Register/Register'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

      <Registration/>
    
       
      </div>
    );
  }
}

export default App;
