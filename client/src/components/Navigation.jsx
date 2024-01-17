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
            <NavLink to="/trendingmovies" className="fs-4">
              Trending
            </NavLink>
          </li>
          <li>
            <NavLink to="/SearchBox" className="fs-4">
              Search
            </NavLink>
          </li>
          <li>
            <div className="login">
              <NavLink to="/LoginPage" className="fs-4">
                Login
              </NavLink>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
