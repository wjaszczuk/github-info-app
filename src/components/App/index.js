import React, { Component } from 'react';
import Header from '../Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>My text</p>
      </div>
    );
  }
}

export default App;
