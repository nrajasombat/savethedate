import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './RSVP.scss';

const RSVP = ({ title }) => {
  return (
    <div className="rsvp">
      <div className="container">
        <div className="section-heading">
          <h2>{title}</h2>
          <div className="heart" />
          <Row>
            <Col md={12}>
              <div className="rsvp-icon">
                <form
                  action=" https://docs.google.com/forms/d/e/1FAIpQLSev8Jz13NEmzq_0KRpbwVnTEp8h-T1zQ4n1KUfCgpEqvimL-A/formResponse"
                  method="post"
                  id="application-form"
                  target="_blank"
                >
                  <Row>
                    <Col md={3}></Col>
                    <Col md={6}>
                      <div className="form-group">
                        <input
                          type="text"
                          name="emailAddress"
                          class="form-control email"
                          id="emailAddress"
                          dir="auto"
                          aria-label="Email"
                          placeholder="Email"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          name="entry.877086558"
                          class="form-control "
                          id="entry_877086558"
                          dir="auto"
                          aria-label="First Name"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          name="entry.561639769"
                          class="form-control"
                          id="entry_561639769"
                          dir="auto"
                          aria-label="Last Name"
                          placeholder="Last Name"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="submit"
                          id="submit"
                          class="btn btn-custom"
                          name="submit"
                          value="Submit"
                        />
                      </div>
                    </Col>
                    <Col md={3}></Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default RSVP;
