import React, { Component } from 'react';
import './App.css';
import About from './Components/About';
import Attendants from './Components/Attendants';
import Event from './Components/Event';
import OurStory from './Components/OurStory';
import Details from './Components/Details';
import Registry from './Components/Registry';
import Pics from './SmartComponents/Pics';
import Title from './Components/Title';
import Header from './Header';
import WeddingDate from './SmartComponents/WeddingDate';
import Accommodations from './Components/Accommodations';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Title />
        <WeddingDate />
        <About title="About The Couple" />
        <OurStory title="Our Story" />
        <Attendants title="Bridesmaid & Groomsmen" />
        <Event title="Event" />
        <Accommodations title="Guest Accommodations" />
        <Details title="More Information" />
        <Registry title="Registry" />
        <Pics title="Gallery" />
      </div>
    );
  }
}

export default App;
