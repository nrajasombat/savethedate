import React, { Component } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import './Event.scss';
import celebrate from './images/Celebrate.png';

class Event extends Component {
  render() {
    return (
      <div class="event">
        <div className="container">
          <div className="section-heading">
            <h2>{this.props.title}</h2>
            <div className="heart" />
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
                    Saturday, September 2, 2017 Time: 3:00 PM Attire: Formal
                  </p>
                  <p>
                    Imperdiet interdum donec eget metus auguen unc vel lorem
                    ispuet Ibu lum orci eget, viverra elit liquam erat volut pat
                    phas ellus ac sodales Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit uasi quidem minus id iprum
                    omnis. Lorem ipsum dolor Phas ellus ac sodales felis tiam.
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
                      ispuet Ibu lum orci eget, viverra elit liquam erat volut
                      pat phas ellus ac sodales Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit uasi quidem minus id iprum
                      omnis. Lorem ipsum dolor Phas ellus ac sodales felis tiam.
                    </p>
                    <p>
                      Imperdiet interdum donec eget metus auguen unc vel lorem
                      ispuet Ibu lum orci eget, viverra elit liquam erat volut
                      pat phas ellus ac sodales Lorem ipsum dolor sit amet,
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
            <Row>
              <Col md={6}>
                <div className="resp-container">
                  <iframe
                    class="resp-iframe"
                    src="https://maps.google.com/maps?q=dallas%20palms&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className="margin1">
                  <div className="right">
                    <div className="title">Ceremony</div>
                    <h2>October 26, 2019</h2>
                    <h6> Dallas Palms</h6>
                    <h6> Time: 3:00 PM</h6>
                    <h6>2424 Marsh Ln, Carrollton, TX 75006</h6>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div className="margin1">
                  <div className="right">
                    <div className="title">Reception</div>
                    <h2>October 26, 2019</h2>
                    <h6> Kirin Court</h6>
                    <h6> Time: 6:00 PM - Midnight</h6>
                    <h6>221 W Polk St #200, Richardson, TX 75081</h6>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="resp-container">
                  <iframe
                    class="resp-iframe"
                    src="https://maps.google.com/maps?q=Kirin%20Court&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Event;
