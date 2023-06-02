import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.scss';
import { routePaths } from '../../config/routes';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Navbar className='ps-5 pe-5' bg="purple" expand="lg" variant="dark">
      <Navbar.Brand>react API</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className='justify-content-end'>
        <Nav className="ml-auto">
        {routePaths.map((route, index: number) => (
          <Nav.Link as={Link} to={route.to} key={index}>
            {route.label}
          </Nav.Link>
        ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
