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
