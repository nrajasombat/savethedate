import React from 'react';
import { Col, Row } from 'react-bootstrap';
import '../style/Registry.scss';

const Registry = ({ title }) => {
  return (
    <div className="registry">
      <div className="container">
        <div className="section-heading">
          <h2>{title}</h2>
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
};

export default Registry;
