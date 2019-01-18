import React, { Component } from "react";
import "./Section.css";
import Section from "./Section";
import "./Attendants.css";
import { Col } from "react-bootstrap";

class Attendants extends Component {
  render() {
    return (
      <div class="attendants">
        <Section />
        <div className="container">
          <Col md={12}>
            <ul className="nav nav-tabs">
              <li className="active">
                <a href="#bridemaids" data-toggle="tab" aria-expanded="true">
                  The Ladies
                </a>
              </li>
              <li className="">
                <a href="#groomsman" data-toggle="tab" aria-expanded="false">
                  The Gentlemen
                </a>
              </li>
            </ul>
          </Col>
        </div>
      </div>
    );
  }
}

export default Attendants;
