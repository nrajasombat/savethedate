import React from 'react';
import '../style/Bridesmaid.scss';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import aninapic from '../images/bridesmaids/anina.png';
import neenapic from '../images/bridesmaids/Neena.png';
import lisapic from '../images/bridesmaids/Lisa.png';
import jennypic from '../images/bridesmaids/Jenny.png';
import ashleypic from '../images/bridesmaids/Ashl.png';
import { Image } from 'react-bootstrap';

const bridesmaids = [
  {
    picture: jennypic,
    name: 'Jenny Manokoune',
    job: 'Maid of Honor',
  },
  {
    picture: aninapic,
    name: 'Anina Rasaphangthong',
    job: 'Matron of Honor',
  },
  {
    picture: neenapic,
    name: 'Neena Keoonla',
    job: 'Matron of Honor',
  },
  {
    picture: lisapic,
    name: 'Lisa Keoonla',
    job: 'Bridesmaid',
  },
  {
    picture: ashleypic,
    name: 'Ashley Ngaoluangrath',
    job: 'Bridesmaid',
  },
];
const options = {
  items: 3,
  nav: 'true',
  loop: 'true',
  responsive: {
    0: { items: 1 },
    400: { items: 1 },
    600: { items: 2 },
    1000: { items: 3 },
  },
};

const Bridesmaid = () => {
  return (
    <div className="container">
      <OwlCarousel className="owl-theme" {...options}>
        {bridesmaids.map(bridesmaid => (
          <div className="bridalparty">
            <Image src={bridesmaid.picture} circle bsClass="maid img" />
            <div className="info">{bridesmaid.name}</div>
            <div className="description">{bridesmaid.job}</div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Bridesmaid;
