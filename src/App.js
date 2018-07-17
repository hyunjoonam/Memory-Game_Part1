import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route } from 'react-router-dom';
import MemoryGame from './MemoryGame.js';
import Ajax from './Ajax.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="navbar">
            <Link to="/memory">Memory Game</Link>
            <Link to="/ajax">Ajax</Link>
        </div>
        <div>
            <Route path="/memory" component={MemoryGame}/>
            <Route path="/ajax" component={Ajax}/>
        </div>
      </div>
    );
  }
}

export default App;