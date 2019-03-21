import React from 'react';
import '../style/OurStory.scss';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import pic1 from '../images/ourstory/firstdate.png';
import pic2 from '../images/ourstory/firstParty.png';
import pic3 from '../images/ourstory/brianwedding.png';
import pic4 from '../images/ourstory/sefwedding.png';
import pic5 from '../images/ourstory/xmas2016.png';
import pic6 from '../images/ourstory/calitrip.png';
import { Image, Row } from 'react-bootstrap';
import anime from '../images/ourstory/animation.gif';
import pic7 from '../images/ourstory/ring.jpg';

const selfies = [
  {
    picture: pic1,
    description: '2012',
    date: 'First Selfie Together',
  },
  {
    picture: pic2,
    description: '2013',
    date: 'First Date',
  },
  {
    picture: pic3,
    description: '2013',
    date: 'First Party',
  },
  {
    picture: pic4,
    description: '2014',
    date: 'First Wedding ',
  },
  {
    picture: anime,
    description: '2014',
    date: 'Our Trip to Arkansas',
  },
  {
    picture: pic5,
    description: '2015',
    date: 'Christmas 2015',
  },
  {
    picture: pic6,
    description: '2015',
    date: 'Our First Trip to California Together',
  },
  {
    picture: pic7,
    description: 'September 17, 2016',
    date: 'He Proposed',
  },
];
const options = {
  loop: true,
  margin: 10,
  nav: true,
  lazyLoad: true,

  responsive: {
    0: {
      items: 1,
      stagePadding: 50,
    },
    300: {
      items: 1,
      stagePadding: 50,
    },
    500: {
      items: 1,
      stagePadding: 90,
    },
    600: {
      items: 1,
      stagePadding: 150,
    },

    700: {
      items: 1,
      stagePadding: 200,
    },
    800: {
      items: 1,
      stagePadding: 250,
    },
    1000: {
      items: 2,
      stagePadding: 150,
    },

    1200: {
      items: 3,
      stagePadding: 150,
    },
    1400: {
      items: 3,
      stagePadding: 150,
    },
    1600: {
      items: 3,
      stagePadding: 150,
    },
    1800: {
      items: 4,
      stagePadding: 150,
    },
    2000: {
      items: 4,
      stagePadding: 250,
    },
    3000: {
      items: 5,
      stagePadding: 250,
    },
    4000: {
      items: 5,
      stagePadding: 250,
    },
  },
};

const OurStory = ({ title }) => {
  return (
    <div className="ourStory">
      <div className="container-fluid">
        <div className="section-heading">
          <h2>{title}</h2>
          <div className="heart" />
          <Row>
            <OwlCarousel className="owl-theme" {...options}>
              {selfies.map(selfie => (
                <div class="photos">
                  <a href={selfie.picture}>
                    <Image
                      src={selfie.picture}
                      rounded
                      responsive
                      bsClass="selfies img"
                    />
                    <div className="whenwemet">
                      <span>{selfie.description}</span>
                      <p>{selfie.date}</p>
                    </div>
                  </a>
                </div>
              ))}
            </OwlCarousel>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
