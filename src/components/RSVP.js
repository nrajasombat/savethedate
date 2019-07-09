import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import savethedate from '../images/ourstory/savedate.png';

const RSVP = ({ title }) => {
  return (
    <div className="registry">
      <div className="container">
        <div className="section-heading">
          <h2>{title}</h2>
          <div className="heart" />
          <Row>
            <Col md={12}>
              <div className="rsvp-icon">
                <a
                  href=" https://docs.google.com/forms/d/e/1FAIpQLSev8Jz13NEmzq_0KRpbwVnTEp8h-T1zQ4n1KUfCgpEqvimL-A/viewform?usp=sf_link"
                  target="_blank"
                >
                  <Image src={savethedate} />
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default RSVP;
