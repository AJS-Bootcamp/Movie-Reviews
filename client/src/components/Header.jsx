import Navigation from './Navigation';
import LogoAJS from '../app/assets/img/lightAJS.png';
import { Navbar, NavbarBrand } from 'reactstrap';
import { useState } from 'react';

function Header() {
  const [showText, setShowText] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setShowText(!showText);
  };

  return (
    <div className="header">
      <Navbar color="dark" dark sticky="top" expand="md">
        <NavbarBrand className="ms-5" href="/">
          <img
            src={LogoAJS}
            alt="team logo"
            className="float-start"
            onClick={handleClick}
          />
          <h1 className="mt-1">Movies Review</h1>
        </NavbarBrand>
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
