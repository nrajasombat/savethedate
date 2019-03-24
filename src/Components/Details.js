import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import '../style/Details.scss';
import parking from '../images/details/parking.png';
import familystyle from '../images/details/familystyle.jpg';

const Details = ({ title }) => {
  return (
    <div class="detail">
      <div className="container">
        <h2>{title}</h2>
        <Row>
          <Col md={12}>
            <div className="title" />
            <h1>Additional Parking to Reception Venue</h1>
            <Image src={parking} />
            <h1>
              Our reception may be a little different from what you are used to.
              Here are some things that may be unfamiliar:
            </h1>
          </Col>
          <Col md={6}>
            <div className="left">
              <Image src={familystyle} rounded bsClass="family img" />
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
  );
};

export default Details;
