import React, { Component } from 'react';
import './Attendants.scss';
import { Col, Button } from 'react-bootstrap';
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
              <div className="attend-btn">
                <a onClick={this.toggle.bind(this, 1)}>
                  <Button className="maids">Bridesmaid</Button>
                </a>
                <a onClick={this.toggle.bind(this, 2)}>
                  <Button className="groomsman">Groomsmen</Button>
                </a>
                <div
                  className={`collapsible ${
                    this.state.current === 1 ? 'open ' : ''
                  }`}
                >
                  <Bridesmaid />
                </div>
              </div>

              <div
                className={`collapsible ${
                  this.state.current === 2 ? 'open ' : ''
                }`}
              >
                <Groomsmen />
              </div>
            </ul>
          </Col>
        </div>
      </div>
    );
  }
}

export default Attendants;
