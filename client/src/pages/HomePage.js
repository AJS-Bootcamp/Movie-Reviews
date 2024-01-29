import React, { useState } from 'react';

import logo from '../app/assets/img/MoviesAJS.png';

import '../App.css';
import NavigationGenre from '../components/NavigationGenre';
import TrendingList from '../components/movies/trendingList';

function Homepage() {
  const [movies, setMovies] = React.useState([]);
  const [loading, setLoading] = useState(false);

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
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          style={{ filter: 'grayscale(1) invert(1)' }}
        />
        <h1>Carrousel</h1>
        {/* <h2>Find Your Movies Here</h2>
        <button onClick={() => fetchData()}>Find Your Movies</button> */}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <NavigationGenre />
      </div>
      <div>{loading ? <p>Loading...</p> : <TrendingList />}</div>
    </div>
  );
}

export default Homepage;
