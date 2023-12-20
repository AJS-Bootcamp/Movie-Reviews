import Navigation from './Navigation';
import LogoAJS from '../app/assets/img/lightAJS.png';
import { NavbarBrand } from 'reactstrap';
import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  const [showText, setShowText] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setShowText(!showText);
  };

  return (
    <div className="header">
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <NavbarBrand className="ms-5" href="/">
          <img
            src={LogoAJS}
            alt="team logo"
            className="float-start"
            onClick={handleClick}
          />
          <h1 className="mt-1">Movies Review</h1>
        </NavbarBrand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Container>
  </Navbar>

   
      <Navbar color="dark" dark sticky="top" expand="md">
        
        <Navigation className="nav-link" />
      </Navbar>
      <div
        className={`text-center bg-info fs-5 ${
          showText ? 'show-text' : 'hide-text'
        }`}
      ></div>
    </div>
  );
}

export default Header;
