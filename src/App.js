import React, { Component } from "react";
import "./App.css";
import About from "./About";
import Attendants from "./Attendants";

class App extends Component {
  render() {
    return (
      <div className="App">
        <About />
        <Attendants />
      </div>
    );
  }
}

export default App;
