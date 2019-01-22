import React, { Component } from 'react';
import './Groomsmen.scss';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import azpic from './images/AZ.png';
import victorpic from './images/Victor.png';
import dillonpic from './images/Dillon.png';
import alanpic from './images/Alan.png';
import robertpic from './images/Robert.png';
import { Image } from 'react-bootstrap';

const groomsmen = [
  {
    picture: robertpic,
    name: 'Robert Simpson',
    job: 'Best Man',
  },
  {
    picture: victorpic,
    name: 'Victor Buhl',
    job: 'Groomsmen',
  },
  {
    picture: alanpic,
    name: 'Alan Hamlett',
    job: 'Groomsmen',
  },
  {
    picture: azpic,
    name: 'AZ Zayan',
    job: 'Officiant',
  },
  {
    picture: dillonpic,
    name: 'Dillon Manokoune',
    job: 'Groomsmen',
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

class Groomsmen extends Component {
  render() {
    return (
      <div className="container">
        <OwlCarousel className="owl-theme" margin={10} {...options}>
          {groomsmen.map(groomsman => (
            <div class="groomsparty">
              <Image src={groomsman.picture} circle bsClass="men img" />
              <div className="info">{groomsman.name}</div>
              <div className="description">{groomsman.job}</div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    );
  }
}

export default Groomsmen;
