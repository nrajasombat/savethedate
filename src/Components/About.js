import React from 'react';
import './About.css';
import thapic from '../images/couple/Tha.png';
import vupic from '../images/couple/Vu.png';
import { Col, Image } from 'react-bootstrap';

const About = ({ title }) => {
  return (
    <div className="about">
      <div className="container">
        <div className="section-heading">
          <h2>{title}</h2>
          <div className="heart" />

          <Col md={6}>
            <div className="couple">
              <Image src={vupic} circle bsClass="profile img" />
            </div>
            <h4 className="text-ornament">Vu</h4>
            <h6 className="main-subheader">Nguyen</h6>
          </Col>
          <Col md={6}>
            <div className="couple">
              <Image src={thapic} circle bsClass="profile img" />
            </div>

            <h4 className="text-ornament">Tha</h4>
            <h6 className="main-subheader">Rajasombat</h6>
          </Col>
        </div>
      </div>
    </div>
  );
};

export default About;
