import React, { Component } from 'react';
import LogIn from './Components/LogIn/LogIn'
import Navigation from './Components/Navigation/Navigation'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation />
       <LogIn/>
      </div>
    );
  }
}

export default App;
