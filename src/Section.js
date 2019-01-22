import React, { Component } from 'react';
import './Section.css';

const headings = [
  {
    header: 'About The Couple',
  },
  {
    header: 'Our Story',
  },
  {
    header: 'Bridesmaids & Groomsman',
  },
  {
    header: 'The Event',
  },
  {
    header: 'Registry',
  },
  {
    header: 'Gallery',
  },
];

class Section extends Component {
  render() {
    return (
      <div class="container">
        {headings.map(heading => (
          <div class="section-heading">
            <div>{heading.header}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Section;
