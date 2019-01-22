import React, { Component } from 'react';
import './Bridesmaid.scss';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import pic1 from './images/firstdate.png';
import pic2 from './images/firstParty.png';
import pic3 from './images/brianwedding.png';
import pic4 from './images/sefwedding.png';
import pic5 from './images/xmas2016.png';
import pic6 from './images/calitrip.png';
import { Image } from 'react-bootstrap';

const selfies = [
  {
    picture: pic1,
    description: 'Jenny Manokoune',
    date: 'Maid of Honor',
  },
  {
    picture: pic2,
    description: 'Jenny Manokoune',
    date: 'Maid of Honor',
  },
  {
    picture: pic3,
    description: 'Jenny Manokoune',
    date: 'Maid of Honor',
  },
  {
    picture: pic4,
    description: 'Jenny Manokoune',
    date: 'Maid of Honor',
  },
  {
    picture: pic5,
    description: 'Jenny Manokoune',
    date: 'Maid of Honor',
  },
  {
    picture: pic6,
    description: 'Jenny Manokoune',
    date: 'Maid of Honor',
  },
];
const options = {
  items: 3,
  nav: 'true',
  loop: 'true',
  responsive: {
    0: { items: 1 },
    600: { items: 2 },
    900: { items: 3 },
  },
};

class OurStory extends Component {
  render() {
    return (
      <div className="container">
        <OwlCarousel className="owl-theme" margin={10} {...options}>
          {selfies.map(selfie => (
            <div class="photos">
              <Image src={selfie.picture} circle bsClass="maid img" />
              <div className="description">{selfie.description}</div>
              <div className="date">{selfie.date}</div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    );
  }
}

export default OurStory;
