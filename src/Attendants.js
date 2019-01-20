import React, { Component } from "react";
import "./Section.css";
import "./Attendants.css";
import { PageHeader } from "react-bootstrap";
import Bridesmaid from "./Bridesmaid";

class Attendants extends Component {
  render() {
    return (
      <div class="attendants">
        <PageHeader> Our Story</PageHeader>
        <div className="container">
          <Bridesmaid />
        </div>
      </div>
    );
  }
}

export default Attendants;
