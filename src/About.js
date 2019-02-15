import React from 'react';
import './style/About.css';
import thapic from './images/Tha.png';
import vupic from './images/Vu.png';
import { Col, Image } from 'react-bootstrap';

const About = () => {
  return (
    <div class="about">
      <div className="container">
        <Col md={6}>
          <div className="couple">
            <Image src={vupic} circle bsClass="profile img" />
          </div>
          <h4 class="text-ornament">Vu</h4>
          <h6 class="main-subheader">Chubby Wiener</h6>
          <p>
            Imperdiet interdum donec eget metus auguen unc vel lorem ispuet Ibu
            lum orci eget, viverra elit liquam erat volut pat phas ellus ac
            sodales Lorem ipsum dolor sit amet, consectetur adipisicing elit
            uasi quidem minus id iprum omnis. Lorem ipsum dolor Phas ellus ac
            sodales felis tiam.
          </p>
          <div class="social-media smaller">
            <a href="#" title="">
              <i class="fab fa-twitter" />
            </a>
            <a href="#" title="">
              <i class="fab fa-facebook" />
            </a>
            <a href="#" title="">
              <i class="fab fa-linkedin" />
            </a>
            <a href="#" title="">
              <i class="fab fa-pinterest" />
            </a>
            <a href="#" title="">
              <i class="fab fa-instagram" />
            </a>
          </div>
        </Col>
        <Col md={6} md={6}>
          <div className="couple">
            <Image src={thapic} circle bsClass="profile img" />
          </div>

          <h4 class="text-ornament">Tha</h4>
          <h6 class="main-subheader">Badass Woman</h6>
          <p>
            Imperdiet interdum donec eget metus auguen unc vel lorem ispuet Ibu
            lum orci eget, viverra elit liquam erat volut pat phas ellus ac
            sodales Lorem ipsum dolor sit amet, consectetur adipisicing elit
            uasi quidem minus id iprum omnis. Lorem ipsum dolor Phas ellus ac
            sodales felis tiam.
          </p>
          <div class="social-media smaller">
            <a href="#" title="">
              <i class="fab fa-twitter" />
            </a>
            <a href="#" title="">
              <i class="fab fa-facebook" />
            </a>
            <a href="#" title="">
              <i class="fab fa-linkedin" />
            </a>
            <a href="#" title="">
              <i class="fab fa-pinterest" />
            </a>
            <a href="#" title="">
              <i class="fab fa-instagram" />
            </a>
          </div>
        </Col>
      </div>
    </div>
  );
};

export default About;
