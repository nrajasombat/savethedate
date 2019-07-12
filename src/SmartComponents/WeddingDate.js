import React, { Component } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import '../style/WeddingDate.scss';
import Time from './Time.js';

class WeddingDate extends Component {
  constructor(props) {
    super(props);
    this.state = { deadline: 'October, 26, 2019' };
  }
  render() {
    return (
      <div className="date-page">
        <div className="container">
          <Row>
            <Col md={12}>
              <div className="middle margin1">
                <div className="title">
                  <h2>October 26, 2019</h2>
                  <div className="heart" />
                  <h5 className="margin1">
                    Please RSVP before 26th of September
                  </h5>
                  <Time deadline={this.state.deadline} />
                  <a href="#rsvp">
                    <Button>RSVP</Button>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default WeddingDate;
