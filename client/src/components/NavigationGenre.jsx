// {
//   /* <div class="video-card-container">
//   <div class="video-card">
//     <img src="images/disney.PNG" class="video-card-image" alt="" />
//     <video src="videos/disney.mp4" mute loop class="card-video"></video>
//   </div>
//   <div class="video-card">
//     <img src="images/pixar.PNG" class="video-card-image" alt="" />
//     <video src="videos/pixar.mp4" mute loop class="card-video"></video>
//   </div>
//   <div class="video-card">
//     <img src="images/marvel.PNG" class="video-card-image" alt="" />
//     <video src="videos/marvel.mp4" mute loop class="card-video"></video>
//   </div>
//   <div class="video-card">
//     <img src="images/star-wars.PNG" class="video-card-image" alt="" />
//     <video src="videos/star-war.mp4" mute loop class="card-video"></video>
//   </div>
//   <div class="video-card">
//     <img src="images/geographic.PNG" class="video-card-image" alt="" />
//     <video src="videos/geographic.mp4" mute loop class="card-video"></video>
//   </div>
// </div>; */
// }

import { NavLink } from 'react-router-dom';

// {
//   /* <Route path="/movies/action" component={ActionMovies} /> */
// }
function NavigationGenre() {
  return (
    <nav className="navgenre">
      <ul className="navbar-nav">
        <li>
          <NavLink to="/movies/action" className="nav-link">
            Action
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies/drama" className="nav-link">
            Drama
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies/comedy" className="nav-link">
            Comedy
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationGenre;
