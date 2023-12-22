import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="fs-4">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Trending" className="fs-4">
              Trending
            </NavLink>
          </li>
          <li>
            <NavLink to="/Search" className="fs-4">
              Search
            </NavLink>
          </li>
          <li>
            <NavLink to="/LoginPage" className="fs-4">
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
