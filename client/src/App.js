import React, { Component } from 'react';
import logo from './logo.svg';
import TasksContainer from './components/TasksContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the OMiC Task App</h1>
        </header>
        <TasksContainer />
      </div>
    );
  }
}

export default App;
