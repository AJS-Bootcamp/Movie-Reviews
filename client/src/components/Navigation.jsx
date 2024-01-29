import React, { useEffect, useState } from 'react';

import { NavLink } from 'react-router-dom';
import SearchBox from './SearchBox';
import LogoAJS from '../app/assets/img/MovieAJS.png';
import { Navbar, NavbarBrand } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';

import Dropdown from 'react-bootstrap/Dropdown';

function Navigation({ posts, setSearchResults }) {
  useEffect(() => {
    fetch('/api/posts')
      .then((response) => response.json())
      .then((data) => setSearchResults(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  const [showText, setShowText] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setShowText(!showText);
  };

  return (
    <>
      <Navbar>
        <ul>
          <li>
            <NavbarBrand href="/">
              <img
                src={LogoAJS}
                alt="team logo"
                onClick={handleClick}
                style={{ filter: 'grayscale(1) invert(1)' }}
              />
              <h1>Movies Review</h1>
            </NavbarBrand>
          </li>

          <li>
            <NavLink to="/trendingmovies" className="fs-4">
              Trending
            </NavLink>
          </li>
          <li>
            <NavLink to="/actionmovies" className="fs-4">
              Action
            </NavLink>
          </li>
          <li>
            <NavLink to="/animationmovies" className="fs-4">
              Animation
            </NavLink>
          </li>
          <li>
            <NavLink to="/comedymovies" className="fs-4">
              Comedy
            </NavLink>
          </li>
          <li>
            <NavLink to="/dramamovies" className="fs-4">
              Drama
            </NavLink>
          </li>
          <li>
            <div className="dropdown">
              function Dropdown() {'{'}
              
              <button className="dropbtn">
                {/* or <FontAwesomeIcon icon={faCircleChevronDown} /> */}
                <FontAwesomeIcon icon={faCaretDown} />
              </button>
              <div className="dropdown-content">
                <li>
                  <NavLink to="/dramamovies" className="fs-4">
                    Drama
                  </NavLink>
                </li>
                <NavLink to="/horror" className="fs-4">
                  Horror
                </NavLink>
                <NavLink to="/romance" className="fs-4">
                  Romance
                </NavLink>
                <NavLink to="/scifi" className="fs-4">
                  Sci-Fi
                </NavLink>
                <NavLink to="/thriller" className="fs-4">
                  Thriller
                </NavLink>
              </div>
            </div>
          </li>

          <li>
            <SearchBox posts={posts} setSearchResults={setSearchResults} />
          </li>
          <li>
            <div className="login">
              <FontAwesomeIcon icon={faUserTie} />
              <NavLink to="/login" className="fs-4">
                Login
              </NavLink>
            </div>
          </li>
        </ul>
      </Navbar>
    </>
  );
}

export default Navigation;
