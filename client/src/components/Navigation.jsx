import React, { useEffect, useState } from 'react';
import '../App.css';

import { NavLink } from 'react-router-dom';
import SearchBox from './SearchBox';
import LogoAJS from '../app/assets/img/MovieAJS.png';
import { Navbar, NavbarBrand } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';

import { ChakraProvider } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

import {
  Box,
  Button,
  IconButton,
  ButtonGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';

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
            <Menu>
              <MenuButton
                className="menuButton"
                as={Button}
                rightIcon={<ChevronDownIcon />}
                style={{ fontSize: '15   px', width: '80px' }}
              >
                More
              </MenuButton>
              <MenuList>
                <MenuItem minH="20px">
                  <NavLink to="/dramamovies" className="fs-4">
                    Drama
                  </NavLink>
                </MenuItem>

                <MenuItem minH="20px">
                  <NavLink to="/familymovies" className="fs-4">
                    Family
                  </NavLink>
                </MenuItem>

                <MenuItem minH="20px">
                  <NavLink to="/horrormovies" className="fs-4">
                    Horror
                  </NavLink>
                </MenuItem>

                <MenuItem minH="20px">
                  <NavLink to="/romancemovies" className="fs-4">
                    Romance
                  </NavLink>
                </MenuItem>
              </MenuList>
            </Menu>
          </li>

          <li>
            <SearchBox posts={posts} setSearchResults={setSearchResults} />
          </li>

          {/* Login with dropdown split dropdown */}
          <li>
            <div className="menuLogin">
              <Box className="myBox" display="flex" alignItems="center">
                <NavLink to="/login">
                  <Button
                    style={{
                      padding: '3px',
                      fontSize: '15px',
                      width: '90px',
                      alignItems: 'center',
                    }}
                  >
                    <span style={{ marginRight: '10px' }}>Login</span>{' '}
                    <FontAwesomeIcon icon={faUserTie} />
                  </Button>
                </NavLink>
                <Menu>
                  <MenuButton
                    as={IconButton}
                    icon={<ChevronDownIcon />}
                    style={{ height: '27px', width: '20px' }}
                  />
                  <MenuList>
                    <MenuItem minH="20px">
                      <NavLink to="/login" className="fs-4">
                        Profile
                      </NavLink>
                    </MenuItem>

                    <MenuItem minH="30px">
                      <NavLink to="/Favorites" className="fs-4">
                        Favorites
                      </NavLink>
                    </MenuItem>

                    <MenuItem minH="30px">
                      <NavLink to="/Watchlist" className="fs-4">
                        Watchlist
                      </NavLink>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </div>
          </li>
        </ul>
      </Navbar>
    </>
  );
}

export default Navigation;
