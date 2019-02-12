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
              <h5 class="margin1 text-ornament">Are getting married</h5>
            </div>
          </Col>
          <Col md={12}>
            <div className="center">
              <div className="title">
                <h2>October 26, 2019</h2>
              </div>
              <div className="hr" />
              <p>
                Our reception may be a little different from what you are used
                to. Here are some things that may be unfamiliar:
                <li>
                  When you arrive we will be waiting to take pictures with you.
                  Cheese!
                </li>
                <li>
                  The reception meal will be served family style, so be ready to
                  share with your table-mates.
                </li>
                <li>
                  Cash or checks are preferred for our wedding. These are
                  typically given to the bride and groom in hongbaos (red
                  envelopes) or whatever envelopes you have at home. But if you
                  prefer we still have a registry! And any personal gifts will
                  be loved and cherished.
                </li>
                <li>
                  Towards the end of the meal, the wedding party will visit each
                  table to give everyone a chance to celebrate. During this time
                  it would be best to select individual from the table to
                  collect the hongbaos/envelopes to present to the bride and
                  groom, and say a few words that will be remembered forever so
                  no pressure.
                </li>
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Title;
