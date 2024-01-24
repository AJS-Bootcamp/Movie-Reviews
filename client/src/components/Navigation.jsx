import React, { useEffect, useState } from 'react';

import { NavLink } from 'react-router-dom';
import SearchBox from './SearchBox';
import LogoAJS from '../app/assets/img/MovieAJS.png';
import { Navbar, NavbarBrand } from 'reactstrap';

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
          {/* bring more and display more movies <FontAwesomeIcon icon="fa-solid fa-caret-down" /> */}
          <li>
            <NavLink to="/movies" className="fs-4">
              <i class="fa-solid fa-caret-down"></i>
            </NavLink>
          </li>
          <li>
            <SearchBox posts={posts} setSearchResults={setSearchResults} />
          </li>
          <li>
            {/* icon for user  <FontAwesomeIcon icon="fa-solid fa-user-tie" />*/}
            <div className="login">
              <NavLink to="/LoginPage" className="fs-4">
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
