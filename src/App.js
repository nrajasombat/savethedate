import React, { Component } from 'react';
import './App.css';
import About from './About';
import Attendants from './Attendants';
import Event from './Event';

class App extends Component {
  render() {
    return (
      <div className="App">
        <About />
        <Attendants />
        <Event />
      </div>
    );
  }
}

export default App;
