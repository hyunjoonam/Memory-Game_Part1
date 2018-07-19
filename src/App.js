import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route } from 'react-router-dom';
import MemoryGame from './MemoryGame.js';
import Jobs from './Jobs.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="navbar">
            <Link to="/memory">Memory Game</Link>
            <Link to="/jobs">Jobs</Link>
        </div>
        <div>
            <Route path="/memory" component={MemoryGame}/>
            <Route path="/jobs" component={Jobs}/>
        </div>
      </div>
    );
  }
}

export default App;