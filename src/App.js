import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Attendants from './components/Attendants';
import Event from './components/Event';
import OurStory from './components/OurStory';
import Details from './components/Details';
import Registry from './components/Registry';
import Pics from './SmartComponents/Pics';
import Title from './components/Title';
import Header from './Header';
import Accommodations from './components/Accommodations';
import RSVP from './components/RSVP';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <Route exact path="/" component={Title} />
          <Route
            path="/about"
            component={() => <About title="It's A Match!" />}
          />
          <Route
            path="/ourstory"
            component={() => <OurStory title="Our Story" />}
          />
          <Route
            path="/attendants"
            component={() => <Attendants title="Bridesmaid & Groomsmen" />}
          />
          <Route path="/event" component={() => <Event title="Event" />} />
          <Route
            path="/accommodations"
            component={() => <Accommodations title="Guest Accommodations" />}
          />
          <Route
            path="/detail"
            component={() => <Details title="More Information" />}
          />
          <Route
            path="/registry"
            component={() => <Registry title="Registry" />}
          />
          <Route path="/gallery" component={() => <Pics title="Gallery" />} />
          <Route path="/RSVP" component={() => <RSVP title="RSVP" />} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
