import React from 'react';
import './Footer.scss';

const Footer = ({ title }) => {
  return (
    <div className="footer">
      <div className="logo">
        Copyright <i class="far fa-copyright"></i> 2019 - Tha & Vu
      </div>
    </div>
  );
};

export default Footer;
