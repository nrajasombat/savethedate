import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './App.css';

const Header = () => {
  return (
    <div className="Header">
      <Navbar collapseOnSelect>
        <Navbar.Header bsclass="header">
          <Navbar.Brand>
            <Link to="/">Tha & Vu</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1}>
              <Link to="/about">About</Link>
            </NavItem>
            <NavItem eventKey={2}>
              <Link to="/ourstory">Our Story</Link>
            </NavItem>
            <NavItem eventKey={3}>
              <Link to="/attendants">Attendants</Link>
            </NavItem>
            <NavItem eventKey={4}>
              <Link to="/event">Event</Link>
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1}>
              <Link to="/accommodations">Guest Accommodations</Link>
            </NavItem>
            <NavItem eventKey={2}>
              <Link to="/detail">More Info</Link>
            </NavItem>
            <NavItem eventKey={3}>
              <Link to="/registry">Registry</Link>
            </NavItem>
            <NavItem eventKey={4}>
              <Link to="/gallery">Gallery</Link>
            </NavItem>
            <NavItem eventKey={5}>
              <Link to="/RSVP">RSVP</Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
