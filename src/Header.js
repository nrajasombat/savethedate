import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">Tha & Vu</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                About
              </NavItem>
              <NavItem eventKey={2} href="#">
                Our Story
              </NavItem>
              <NavItem eventKey={3} href="#">
                Attendants
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                The Event
              </NavItem>
              <NavItem eventKey={2} href="#">
                Registry
              </NavItem>
              <NavItem eventKey={3} href="#">
                Gallery
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
