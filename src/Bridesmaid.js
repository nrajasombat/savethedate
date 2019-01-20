import React, { Component } from "react";
import "./Bridesmaid.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";
import aninapic from "./images/anina.png";
import neenapic from "./images/Neena.png";
import lisapic from "./images/Lisa.png";
import jennypic from "./images/Jenny.png";
import ashleypic from "./images/Ashl.png";
import { Image } from "react-bootstrap";

const bridesmaids = [
  {
    picture: jennypic,
    name: "Jenny Manokoune",
    job: "Maid of Honor"
  },
  {
    picture: aninapic,
    name: "Anina Rasaphangthong",
    job: "Bridesmaid"
  },
  {
    picture: neenapic,
    name: "Neena Keoonla",
    job: "Matron of Honor"
  },
  {
    picture: lisapic,
    name: "Lisa Keoonla",
    job: "Bridesmaid"
  },
  {
    picture: ashleypic,
    name: "Ashley Ngaoluangrath",
    job: "Bridesmaid"
  }
];

class Bridesmaid extends Component {
  render() {
    return (
      <div className="container">
        <OwlCarousel className="owl-theme" loop margin={10} nav>
          {bridesmaids.map(bridesmaid => (
            <div class="bridalparty">
              <Image src={bridesmaid.picture} circle bsClass="profile img" />
              <div className="info">{bridesmaid.name}</div>
              <div className="description">{bridesmaid.job}</div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    );
  }
}

export default Bridesmaid;
