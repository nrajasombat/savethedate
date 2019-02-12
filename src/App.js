import React, { Component } from 'react';
import './App.css';
import About from './About';
import Attendants from './Attendants';
import Event from './Event';
import OurStory from './OurStory';
import Details from './Details';
import Registry from './Registry';
import Pics from './Pics';
import Title from './Title';
import Header from './Header';
import Time from './Time';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { deadline: 'October, 26, 2019' };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Title />
        <Time deadline={this.state.deadline} />
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
