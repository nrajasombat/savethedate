import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Attendants from './components/Attendants';
import Event from './components/Event';
import Details from './components/Details';
import Registry from './components/Registry';
import Pics from './SmartComponents/Pics';
import Title from './components/Title';
import Header from './Header';
import Accommodations from './components/Accommodations';
import RSVP from './components/RSVP';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import Video from './helper/Video';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <Route exact path="/" component={Video} />
          <Route
            path="/about"
            component={() => <About title="It's A Match!" />}
          />
          <Route
            path="/ourstory"
            component={() => <Timeline title="Our Story" />}
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
          <Route path="/gallery" component={() => <Pics title="Gallery" />} />
          <Route
            path="/registry"
            component={() => <Registry title="Registry" />}
          />
          <Route path="/RSVP" component={() => <RSVP title="RSVP" />} />
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
