import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import '../style/Registry.scss';
import zola from '../images/details/zola-logo-blue.jpg';
import amazon from '../images/details/amazonlogo.png';

const Registry = ({ title }) => {
  return (
    <div className="registry">
      <div className="container">
        <div className="section-heading">
          <h2>{title}</h2>
          <div className="heart" />
          <Row>
            <Col md={6}>
              <div className="icon">
                <a href="//www.zola.com/registry/thaandvu" target="_blank">
                  <Image src={zola} circle bsClass="logo img" />
                </a>
              </div>
            </Col>
            <Col md={6}>
              <div className="icon">
                <a
                  href="https://www.amazon.com/wedding/share/tha_vu"
                  target="_blank"
                >
                  <Image src={amazon} circle bsClass="logo img" />
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Registry;
