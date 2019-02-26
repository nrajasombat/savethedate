import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
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
import Accommodations from './Components/Accommodations';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" component={Title} />
          <Route
            path="/about"
            component={() => <About title="About The Couple" />}
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
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
