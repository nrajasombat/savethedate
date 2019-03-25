import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import ballroom from '../images/events/ballroom.png';
import dallaspalms from '../images/events/dallaspalms.png';
import '../Event.scss';

const Event = ({ title }) => {
  return (
    <div className="event">
      <div className="container">
        <div className="section-heading">
          <h2>{title}</h2>
          <div className="heart" />
          <Row>
            <Col md={6}>
              <div className="left">
                <Image src={dallaspalms} rounded bsClass="celebrate img" />
              </div>
            </Col>
            <Col md={6}>
              <div className="right">
                <div className="title">Celebrate With Us</div>
                <div> Date: Saturday, October 26, 2018 </div>
                <div> Time: 3:00 PM </div>
                <div>Attire: Formal</div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className="margin1">
                <div className="right">
                  <div className="title">The Ceremony</div>
                  <h6> Dallas Palms</h6>
                  <h6>2424 Marsh Lane</h6>
                  <h6>Carrollton, Texas 75006</h6>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="left">
                <Image src={ballroom} rounded bsClass="celebrate img" />
              </div>
            </Col>
            <Col md={12}>
              <div className="resp-container">
                <iframe
                  className="resp-iframe"
                  src="https://maps.google.com/maps?q=dallas%20palms&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  title="left"
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className="margin1">
                <div className="right">
                  <div className="title"> The Reception</div>
                  <div> Date: Saturday, October 26, 2018 </div>
                  <h6> Time: 6:00 PM - Midnight</h6>
                  <h6> Kirin Court</h6>
                  <h6>221 W Polk St #200</h6>
                  <h6> Richardson, TX 75081</h6>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="margin1">
                <div className="left">
                  <Image src={dallaspalms} rounded bsClass="celebrate img" />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="resp-container">
                <iframe
                  className="resp-iframe"
                  src="https://maps.google.com/maps?q=Kirin%20Court&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  title="right"
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Event;
