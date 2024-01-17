import React, { useState, useEffect } from 'react';
import trendingImage from './genre/trending.png';
import actionImage from './genre/action.png';

function NavigationGenre() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Add state for error

  useEffect(() => {
    const getTrendingMovies = async () => {
      const moviesFromServer = await fetchData();
      setTrendingMovies(moviesFromServer);
    };

    getTrendingMovies();
  }, []);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch('/api/movies/trending');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(`Error Fetching Data: ${error.message}`);
      setError(error.message); // Set error state
    } finally {
      setLoading(false);
    }
  }

  const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

  return (
    <div className="video-card-container">
      {error && <div>Error: {error}</div>}
      <button className="image-button">
        <img src={trendingImage} alt="Trending" />
        {!loading && trendingMovies.length > 0 && (
          <div
            className="hover-poster poster"
            style={{
              backgroundImage: `url(${
                IMG_PATH + trendingMovies[0].poster_path
              })`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* <img
              className="movie-poster"
              src={`${IMG_PATH + trendingMovies[0].poster_path}`}
              alt={`${trendingMovies[0].title} Poster`}
            /> */}
          </div>
        )}
      </button>
      <button className="image-button">
        <img src={actionImage} alt="Action" />
      </button>
    </div>
  );
}

export default NavigationGenre;
