import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import './Details.scss';
import parking from '../images/details/parking.png';
import familystyle from '../images/details/familystyle.jpg';

const Details = ({ title }) => {
  return (
    <div className="detail">
      <div className="container">
        <div className="section-heading">
          <h2>{title}</h2>
          <div className="heart" />
          <div className="content-wrap">
            <Row>
              <Col md={12}>
                <div className="title" />
                <h1>Additional Parking to Reception Venue</h1>
                <Image src={parking} rounded bsClass="parking img" />
                <h6>Valet Parking Available</h6>
                <div className="section">
                  <h2>Other Info</h2>
                  <div className="heart" />
                  <h1>
                    Our reception may be a little different from what you are
                    used to. Here are some things that may be unfamiliar:
                  </h1>
                </div>
              </Col>
              <Col md={6}>
                <div className="dinner">
                  <div className="left">
                    <Image src={familystyle} rounded bsClass="family img" />
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="right">
                  <div className="title">Family Style</div>
                  The reception meal will be served family style, so be ready to
                  share with your table-mates.
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
