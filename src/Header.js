import React, {Component} from 'react';
import {Nav, Navbar,NavItem} from 'react-bootstrap'
import './App.css';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#brand">Tha & Vu</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#">
                                Link
                            </NavItem>
                            <NavItem eventKey={2} href="#">
                                Link
                            </NavItem>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">
                                Link Right
                            </NavItem>
                            <NavItem eventKey={2} href="#">
                                Link Right
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;
