import React, { Component } from 'react';
import logo from './logo.svg';
import TasksContainer from './components/TasksContainer';
import AllocationContainer from './components/AllocationContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the OMiC Task App</h1>
        </header>
        <div class='panel'>
          <h1>OMiC Tasks</h1>
          <p>These come from the Rails Engine Tasks API</p>
          <TasksContainer />
        </div>
        <div class='panel'>
          <h1>Offenders to be allocated</h1>
          <p>These come from the Rails Engine Offender API</p>
          <AllocationContainer />
        </div>
      </div>
    );
  }
}

export default App;
