import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './style/WeddingDate.scss';

const WeddingDate = () => {
  return (
    <div class="date-page">
      <div className="container">
        <Row>
          <Col md={12}>
            <div className="middle margin1">
              <div className="title">
                <h2>October 26, 2019</h2>
                <p>
                  Imperdiet interdum donec eget metus auguen unc vel lorem
                  ispuet Ibu lum orci eget, viverra elit liquam erat volut pat
                  phas ellus ac sodales Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit uasi quidem minus id iprum omnis. Lorem ipsum
                  dolor Phas ellus ac sodales felis tiam.
                </p>
                <p>
                  Imperdiet interdum donec eget metus auguen unc vel lorem
                  ispuet Ibu lum orci eget, viverra elit liquam erat volut pat
                  phas ellus ac sodales Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit uasi quidem minus id iprum omnis. Lorem ipsum
                  dolor Phas ellus ac sodales felis tiam.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default WeddingDate;
