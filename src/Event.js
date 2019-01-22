import React, { Component } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import celebrate from './images/Celebrate.png';
import './Event.scss';

class Event extends Component {
  render() {
    return (
      <div class="event">
        <div className="container">
          <Row>
            <Col md={6}>
              <div className="left">
                <Image src={celebrate} rounded bsClass="celebrate img" />
              </div>
            </Col>
            <Col md={6}>
              <div className="right">
                <div className="title">Celebrate With Us</div>
                <p>
                  Imperdiet interdum donec eget metus auguen unc vel lorem
                  ispuet Ibu lum orci eget, viverra elit liquam erat volut pat
                  phas ellus ac sodales Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit uasi quidem minus id iprum omnis. Lorem ipsum
                  dolor Phas ellus ac sodales felis tiam.
                </p>
                <p>
                  Imperdiet interdum donec eget metus auguen unc vel lorem
                  ispuet Ibu lum orci eget, viverra elit liquam erat volut pat
                  phas ellus ac sodales Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit uasi quidem minus id iprum omnis. Lorem ipsum
                  dolor Phas ellus ac sodales felis tiam.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className="margin1">
                <div className="right">
                  <div className="title">Celebrate With Us</div>
                  <p>
                    Imperdiet interdum donec eget metus auguen unc vel lorem
                    ispuet Ibu lum orci eget, viverra elit liquam erat volut pat
                    phas ellus ac sodales Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit uasi quidem minus id iprum
                    omnis. Lorem ipsum dolor Phas ellus ac sodales felis tiam.
                  </p>
                  <p>
                    Imperdiet interdum donec eget metus auguen unc vel lorem
                    ispuet Ibu lum orci eget, viverra elit liquam erat volut pat
                    phas ellus ac sodales Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit uasi quidem minus id iprum
                    omnis. Lorem ipsum dolor Phas ellus ac sodales felis tiam.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="left">
                <Image src={celebrate} rounded bsClass="celebrate img" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Event;
