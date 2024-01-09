import Navigation from './Navigation';
import LogoAJS from '../app/assets/img/MovieAJS.png';
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
      <Navbar>
        <NavbarBrand href="/">
          <img src={LogoAJS} alt="team logo" onClick={handleClick} />
          <h1>Movies Review</h1>
        </NavbarBrand>
        <Navigation />
      </Navbar>
    </div>
  );
}

export default Header;
