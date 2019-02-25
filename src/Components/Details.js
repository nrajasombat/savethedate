import React from 'react';
import { Col, Row } from 'react-bootstrap';
import '../style/Details.scss';

const Details = ({ title }) => {
  return (
    <div class="detail">
      <div className="container">
        <h2>{title}</h2>
        <Row>
          <Col md={12}>
            <div className="right">
              <div className="title">Details</div>
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

export default Details;
