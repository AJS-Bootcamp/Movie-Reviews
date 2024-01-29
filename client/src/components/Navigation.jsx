import React, { useEffect, useState } from 'react';

import { NavLink } from 'react-router-dom';
import SearchBox from './SearchBox';
import LogoAJS from '../app/assets/img/MovieAJS.png';
import { Navbar, NavbarBrand } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';

import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../App.css';

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

          {/* Dropdown menu */}
          <li>
            <Dropdown data-bs-theme="dark">
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{ padding: '5px', fontSize: '18px', width: '100px' }}
              >
                More <FontAwesomeIcon icon={faCaretDown} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <NavLink to="/dramamovies" className="fs-4">
                    Drama
                  </NavLink>
                </Dropdown.Item>

                <Dropdown.Item>
                  <NavLink to="/familymovies" className="fs-4">
                    Family
                  </NavLink>
                </Dropdown.Item>

                <Dropdown.Item>
                  <NavLink to="/horrormovies" className="fs-4">
                    Horror
                  </NavLink>
                </Dropdown.Item>

                <Dropdown.Item>
                  <NavLink to="/romancemovies" className="fs-4">
                    Romance
                  </NavLink>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>

          <li>
            <SearchBox posts={posts} setSearchResults={setSearchResults} />
          </li>

          {/* Login with dropdown split dropdown */}
          <li>
            <div className="login">
              <Dropdown as={ButtonGroup}>
                <Button
                  variant="success"
                  style={{ padding: '5px', fontSize: '18px', width: '100px' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <NavLink to="/login" className="fs-4">
                      Login
                    </NavLink>
                    <FontAwesomeIcon icon={faUserTie} />
                  </div>
                </Button>

                <Dropdown.Toggle
                  split
                  variant="success"
                  id="dropdown-split-basic"
                  style={{ padding: '5px', fontSize: '18px', width: '30px' }}
                >
                  <FontAwesomeIcon icon={faCaretDown} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    <NavLink to="/login" className="fs-4">
                      Profile
                    </NavLink>
                  </Dropdown.Item>

                  <Dropdown.Item>
                    <NavLink to="/Favorites" className="fs-4">
                      Favorites
                    </NavLink>
                  </Dropdown.Item>

                  <Dropdown.Item>
                    <NavLink to="/Watchlist" className="fs-4">
                      Watchlist
                    </NavLink>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </li>
        </ul>
      </Navbar>
    </>
  );
}

export default Navigation;
