import React from 'react';
import { Col } from 'react-bootstrap';
import '../style/Title.scss';

const Title = () => {
  return (
    <div class="title-page">
      <div className="container">
        <Col md={12}>
          <div className="names-text">
            <h1>
              Tha
              <span className="italic"> &amp; </span>
              Vu
            </h1>
            <h5 className="margin1 text-ornament">Are getting married</h5>
          </div>
        </Col>
      </div>
    </div>
  );
};

export default Title;
