import React, { Component } from "react";
import "./Section.css";
import "./Attendants.css";
import "./Attendants.scss";
import { Col } from "react-bootstrap";
import Bridesmaid from "./Bridesmaid";
import Groomsmen from "./Groomsmen";

class Attendants extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 0
    };
  }

  toggle(index) {
    this.setState({
      current: index
    });
  }

  render() {
    return (
      <div className="attendants">
        <Col md={12}>
          <ul className="nav-tab">
            <li>
              <a href="#maid" onClick={this.toggle.bind(this, 1)}>
                Bridesmaid
              </a>
              <div
                className={`collapsible ${
                  this.state.current === 1 ? "open " : ""
                }`}
              >
                <Bridesmaid />
              </div>
            </li>
            <li>
              <a href="#groomsman" onClick={this.toggle.bind(this, 2)}>
                Groomsmen
              </a>
              <div
                className={`collapsible ${
                  this.state.current === 2 ? "open " : ""
                }`}
              >
                <Groomsmen />
              </div>
            </li>
          </ul>
        </Col>
      </div>
    );
  }
}

export default Attendants;
