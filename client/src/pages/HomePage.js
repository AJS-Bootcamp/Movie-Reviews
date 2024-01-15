
import React, { useState } from 'react';



import logo from '../app/assets/img/MoviesAJS.png';

import '../App.css';
import NavigationGenre from '../components/NavigationGenre';


function Homepage() {
  const [movies, setMovies] = React.useState(null);
  const [loading, setLoading] = useState(false);
  const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';


  async function fetchData() {
    try {
      setLoading(true); // Set loading state to true
      const response = await fetch('/api/movies/trending');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      setMovies(data);
    } catch (error) {
      console.log(`Error Fetching Data: ${error.message}`);
    } finally {
      setLoading(false); // Set loading state to false when done
    }
  }

  return (
    <div className="App">
      <div className="App-background-Logo">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Find Your Movies Here</h2>
        <button onClick={() => fetchData()}>Find Your Movies</button>

      </div>
      <div>
        {loading
          ? 'Loading...'
          : movies.map((movie, index) => {
              const { poster_path, title, overview } = movie;

              return (
                <div className='movie' key={index}>
                  <img
                    src={`${IMG_PATH + poster_path}`}
                    alt={`${title} Poster`}
                  />
                  <h3>{title}</h3>
                  <p>{overview}</p>
                </div>
              );
            })}

        <p>{!movies ? 'Loading...' : movies}</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <NavigationGenre />

      </div>
    </div>
  );
}

export default Homepage;
