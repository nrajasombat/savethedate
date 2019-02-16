import React from 'react';
import './style/OurStory.scss';
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
  items: '4',
  nav: 'true',
  loop: 'true',
  responsive: {
    0: { items: 1 },
    425: { items: 1 },
    800: { items: 3 },
  },
};

const OurStory = () => {
  return (
    <div className="ourStory">
      <div className="container">
        <div className="section-heading">
          <h2>Our Story</h2>
          <div className="heart" />
          <OwlCarousel className="owl-theme" margin={10} {...options}>
            {selfies.map(selfie => (
              <div class="photos">
                <a href={selfie.picture}>
                  <Image
                    src={selfie.picture}
                    rounded
                    responsive
                    bsClass="selfies img"
                  />
                  <h1>{selfie.description}</h1>
                  <p>{selfie.date}</p>
                </a>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
