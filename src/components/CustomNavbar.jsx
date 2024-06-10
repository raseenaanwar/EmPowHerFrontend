import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logo from '../assets/logo.jpeg'; // Import your logo image file

const CustomNavbar = ({ isLoggedIn, handleLogout }) => {
  return (
    <Navbar className="custom-navbar" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home" className="mr-auto">
          <img
            src={logo}
            height="80"
            className="rounded-logo d-inline-block align-top"
            alt="Empowher Logo"
          />
          <div className="website-name">EmPowHer</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-link" href="#home">Home</Nav.Link>
            <Nav.Link className="nav-link" href="#about">About</Nav.Link>
            <Nav.Link className="nav-link" href="#services">Find A Mentor</Nav.Link>
            <Nav.Link className="nav-link" href="#testimonials">Testimonials</Nav.Link>
            <Nav.Link className="nav-link" href="#blog">Donate</Nav.Link>
            {/* <Nav.Link className="nav-link" href="#newsletter">Register</Nav.Link> */}
          </Nav>
          {isLoggedIn ? (
            <Button className="custom-button" onClick={handleLogout} variant="outline-primary">Logout</Button>
          ) : (
            <Nav.Link href="/login" className="custom-button">Sign In / Register</Nav.Link>
          )}
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
