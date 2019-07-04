import React from 'react';

const RSVP = ({ title }) => {
  return (
    <div className="registry">
      <div className="container">
        <div className="section-heading">
          <h2>{title}</h2>
          <div className="heart" />
          Hello
        </div>
      </div>
    </div>
  );
};

export default RSVP;
