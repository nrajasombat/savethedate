import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Event.scss';

const Registry = () => {
  return (
    <div class="event">
      <div className="container">
        <Row>
          <Col md={12}>
            <div className="right">
              <div className="title">Registry</div>
              <p>
                In lieu of registry gifts, a check, cash or contribution to our
                Newly Wed Fund would be greatly appreciated.
              </p>
              <p>Amazon Website</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Registry;
