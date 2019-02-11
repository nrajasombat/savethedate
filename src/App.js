import React, { Component } from 'react';
import './App.css';
import About from './About';
import Attendants from './Attendants';
import Event from './Event';
import OurStory from './OurStory';
import Details from './Details';
import Registry from './Registry';
import Pics from './Pics';

class App extends Component {
  render() {
    return (
      <div className="App">
        <About />
        <OurStory />
        <Attendants />
        <Event />
        <Details />
        <Registry />
        <Pics />
      </div>
    );
  }
}

export default App;
