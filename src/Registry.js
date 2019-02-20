import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import './Event.scss';

class Registry extends Component {
  render() {
    return (
      <div class="event">
        <div className="container">
          <div className="section-heading">
            <h2>{this.props.title}</h2>
            <div className="heart" />
            <Row>
              <Col md={12}>
                <div className="right">
                  <div className="title">Registry</div>
                  <p>
                    In lieu of registry gifts, a check, cash or contribution to
                    our Newly Wed Fund would be greatly appreciated.
                  </p>
                  <p>Amazon Website</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
export default Registry;
