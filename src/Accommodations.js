import React, { Component } from 'react';
import './style/Bridesmaid.scss';

import renaissance from './images/hotels/renaissance.jpg';
import courtyard from './images/hotels/courtyard.jpg';
import residenceinn from './images/hotels/residenceinn.jpg';

import { Image } from 'react-bootstrap';

const hotels = [
  {
    picture: residenceinn,
    name: 'Residence Inn by Marriott Dallas Plano/Richardson',
    address: '1705 E President George Bush Hwy, Plano, TX 75074',
    phoneNumber: '972-424-9101',
    price: '$95 / night Please book by 09/26/2019',
    room:
      'King Studio suites with fully equipped kitchens, and full size sleeper sofa',
    option: 'Complimentary Breakfast, Wi-Fi, and Parking',
    duration: '10 minutes drive to wedding reception site',
    note:
      'Note: This hotel is located right next to the below hotel (Courtyard)',
  },
  {
    picture: courtyard,
    name: 'Courtyard by Marriott Dallas Plano/Richardson',
    address: '1805 E President George Bush Hwy, Plano, TX 75074',
    phoneNumber: '972-516-2949',
    price: '$85 / night Please book by 09/26/2019',
    room: 'Double queen beds / King Standard room',
    option:
      'Complimentary Wi-Fi, and Parking, Bar and Bistro on site to purchase – Breakfast and Dinner',
    duration: '10 minutes drive to wedding reception site',
    note: 'Note: This hotel is located right next to (Residence Inn)',
  },
  {
    picture: renaissance,
    name: 'Renaissance Dallas Richardson Hotel',
    address: '900 E Lookout Dr, Richardson, TX 75082',
    phoneNumber: '972-367-2000',
    price: '$95 / night Please book by 09/26/2019',
    room: 'Double queen beds / King Standard room',
    option: 'Complimentary Breakfast, Wi-Fi, and Parking',
    duration: '10 minutes drive to wedding reception site',
    note:
      'Note: This hotel is located right next to the below hotel (Courtyard)',
  },
];

class Accommodations extends Component {
  render() {
    return (
      <div className="container">
        <div className="section-heading">
          <h2>{this.props.title}</h2>
          <div className="heart" />
          {hotels.map(hotel => (
            <div class="hotelinfo">
              <div className="margin1">
                <Image src={hotel.picture} />
                <h3>{hotel.name}</h3>
                <h3>{hotel.address}</h3>
                <h3>{hotel.phoneNumber}</h3>
                <h6>
                  <b>{hotel.price}</b>
                </h6>
                <h6>{hotel.room}</h6>
                <h6>{hotel.option}</h6>
                <h6>{hotel.duration}</h6>
                <h6>{hotel.note}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Accommodations;
