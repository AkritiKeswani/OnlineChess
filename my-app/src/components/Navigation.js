import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import {Link} from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <Navbar sticky="top" bg="light" expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Brand>KnightShift</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                <Nav.Link><Link to="/rooms">Game Rooms</Link></Nav.Link>
                <Nav.Link><Link to="/settings">Settings</Link></Nav.Link>
              </Nav>
            </Navbar>
        )
    }
}

export default Navigation;
