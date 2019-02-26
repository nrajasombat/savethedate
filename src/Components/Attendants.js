import React, { Component } from 'react';
import '../style/Attendants.scss';
import { Col } from 'react-bootstrap';
import Bridesmaid from '../helper/Bridesmaid';
import Groomsmen from '../helper/Groomsmen';

class Attendants extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 0,
    };
  }

  toggle(index) {
    this.setState({
      current: index,
    });
  }

  render() {
    return (
      <div className="attendants">
        <div className="container">
          <h2>{this.props.title}</h2>
          <div className="heart" />
          <Col md={12}>
            <ul className="nav-tab">
              <li>
                <a href="#maid" onClick={this.toggle.bind(this, 1)}>
                  Bridesmaid
                </a>
                <div
                  className={`collapsible ${
                    this.state.current === 1 ? 'open ' : ''
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
                    this.state.current === 2 ? 'open ' : ''
                  }`}
                >
                  <Groomsmen />
                </div>
              </li>
            </ul>
          </Col>
        </div>
      </div>
    );
  }
}

export default Attendants;
