import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import '../style/Registry.scss';
import zola from '../images/details/zola-logo-blue.jpg';

const Registry = ({ title }) => {
  return (
    <div className="registry">
      <div className="container">
        <div className="section-heading">
          <h2>{title}</h2>
          <div className="heart" />
          <Row>
            <Col md={12}>
              <div className="registry-icon">
                <a href="//www.zola.com/registry/thaandvu" target="_blank">
                  <Image src={zola} circle />
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
