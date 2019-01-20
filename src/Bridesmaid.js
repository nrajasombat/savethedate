import React, { Component } from "react";
import "./About.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";
import thapic from "./images/Tha.png";
import { Image } from "react-bootstrap";

const bridesmaid = [{}];

class Bridesmaid extends Component {
  render() {
    return (
      <div class="bridemaid">
        <div className="container">
          <OwlCarousel className="owl-theme" loop margin={10} nav>
            <div class="item">
              <Image src={thapic} circle bsClass="profile img" />
              <div className="info">
                <h5>Jenny Manokoune</h5>
                <h4>Maid Of Honor</h4>
              </div>
            </div>
            <div class="item">
              <Image src={thapic} circle bsClass="profile img" />
              <div className="info">
                <h5>Jenny Manokoune</h5>
                <h4>Maid Of Honor</h4>
              </div>
            </div>
            <div class="item">
              <Image src={thapic} circle bsClass="profile img" />
              <div className="info">
                <h5>Jenny Manokoune</h5>
                <h4>Maid Of Honor</h4>
              </div>
            </div>
            <div class="item">
              <Image src={thapic} circle bsClass="profile img" />
              <div className="info">
                <h5>Jenny Manokoune</h5>
                <h4>Maid Of Honor</h4>
              </div>
            </div>
            <div class="item">
              <Image src={thapic} circle bsClass="profile img" />
              <div className="info">
                <h5>Jenny Manokoune</h5>
                <h4>Maid Of Honor</h4>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    );
  }
}

export default Bridesmaid;
