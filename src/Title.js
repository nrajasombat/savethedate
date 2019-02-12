import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Title.scss';

const Title = () => {
  return (
    <div class="title-page">
      <div className="container">
        <Row>
          <Col md={12}>
            <div className="names">
              <h1>
                Tha
                <span className="italic"> &amp; </span>
                Vu
              </h1>
              <h5 className="margin1 text-ornament">Are getting married</h5>
            </div>
          </Col>
          <Col md={12}>
            <section />
            <div className="center">
              <div className="title">
                <h2>October 26, 2019</h2>
              </div>
              <div className="hr" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Title;
