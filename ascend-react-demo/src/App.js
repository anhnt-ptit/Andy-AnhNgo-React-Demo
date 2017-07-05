import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './TicTacToe.css';
import Game from './Game.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Ascend TicTacToe Game Demo (Andy)</h2>
        </div>
        <p className="App-intro">

          <h1>This is game area</h1>

          <div style={{displey: 'flex', justifyContent: 'center'}}>
            <Game></Game>
          </div>

        </p>
      </div>
    );
  }
}

export default App;
