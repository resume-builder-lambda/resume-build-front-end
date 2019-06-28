import React, { Component } from 'react';
import LogIn from './Components/LogIn'
import Dashboard from './Components/Dashboard'
import './App.css';
import Register from './Components/Register';
import  { Route } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute'



class App extends Component {
  render() {
    return (
      <div className="App"> 
        
        <Route exact path="/" render = {props => {
          return (<LogIn {...props}/>)
        }} />
        <Route path="/register" component={Register}/>
         <PrivateRoute 
            path="/dashboard" 
            component={() => <Dashboard data={this.props.data} />}
          />
      </div>
    );
  }
}

export default App;
