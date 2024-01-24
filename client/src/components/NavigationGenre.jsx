import React, { useState, useEffect } from 'react';

import actionImage from './genre/action.png';
import animationImage from './genre/animation.png';
import comedyImage from './genre/comedy.png';
import dramaImage from './genre/drama.png';
import familyImage from './genre/family.png';
import horrorImage from './genre/horror.png';
import romanceImage from './genre/romance.png';
import trendingImage from './genre/trending.png';

function NavigationGenre() {
  const [actionMovies, setActionMovies] = useState([]);
  const [animationMovies, setAnimationMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [dramaMovies, setDramaMovies] = useState([]);
  const [familyMovies, setFamilyMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [romanceMovies, setRomanceMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      const actionFromServer = await fetchData('/api/movies/action'); // Fetch action movies
      setActionMovies(actionFromServer);
      const animationFromServer = await fetchData('/api/movies/animation'); // Fetch animation movies
      setAnimationMovies(animationFromServer);
      const comedyFromServer = await fetchData('/api/movies/comedy'); // Fetch comedy movies
      setComedyMovies(comedyFromServer);
      const dramaFromServer = await fetchData('/api/movies/drama'); // Fetch drama movies
      setDramaMovies(dramaFromServer);
      const familyFromServer = await fetchData('/api/movies/family'); // Fetch family movies
      setFamilyMovies(familyFromServer);
      const horrorFromServer = await fetchData('/api/movies/horror'); // Fetch horror movies
      setHorrorMovies(horrorFromServer);
      const romanceFromServer = await fetchData('/api/movies/romance'); // Fetch romance movies
      setRomanceMovies(romanceFromServer);
      const trendingFromServer = await fetchData('/api/movies/trending'); // Fetch trending movies
      setTrendingMovies(trendingFromServer);
    };

    getMovies();
  }, []);

  async function fetchData(endpoint) {
    try {
      setLoading(true);
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(`Error Fetching Data: ${error.message}`);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

  return (
    <div className="video-card-container">
      {error && <div>Error: {error}</div>}

      {/*Action*/}
      <button className="image-button">
        <img
          src={actionImage}
          alt="Action"
          style={{ filter: 'grayscale(1) invert(1)' }}
        />
        {!loading && actionMovies.length > 0 && (
          <div
            className="hover-poster poster"
            style={{
              backgroundImage: `url(${IMG_PATH + actionMovies[0].poster_path})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '10px',
            }}
          />
        )}
      </button>

      {/*Animation*/}
      <button className="image-button">
        <img
          src={animationImage}
          alt="Animation"
          style={{ filter: 'grayscale(1) invert(1)' }}
        />
        {!loading && animationMovies.length > 0 && (
          <div
            className="hover-poster poster"
            style={{
              backgroundImage: `url(${
                IMG_PATH + animationMovies[0].poster_path
              })`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '10px',
            }}
          />
        )}
      </button>

      {/*Comedy*/}
      <button className="image-button">
        <img
          src={comedyImage}
          alt="Comedy"
          style={{ filter: 'grayscale(1) invert(1)' }}
        />
        {!loading && comedyMovies.length > 0 && (
          <div
            className="hover-poster poster"
            style={{
              backgroundImage: `url(${IMG_PATH + comedyMovies[0].poster_path})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '10px',
            }}
          />
        )}
      </button>

      {/*Drama*/}
      <button className="image-button">
        <img
          src={dramaImage}
          alt="Drama"
          style={{ filter: 'grayscale(1) invert(1)' }}
        />
        {!loading && dramaMovies.length > 0 && (
          <div
            className="hover-poster poster"
            style={{
              backgroundImage: `url(${IMG_PATH + dramaMovies[0].poster_path})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '10px',
            }}
          />
        )}
      </button>

      {/*Family*/}
      <button className="image-button">
        <img
          src={familyImage}
          alt="Family"
          style={{ filter: 'grayscale(1) invert(1)' }}
        />
        {!loading && familyMovies.length > 0 && (
          <div
            className="hover-poster poster"
            style={{
              backgroundImage: `url(${IMG_PATH + familyMovies[0].poster_path})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '10px',
            }}
          />
        )}
      </button>

      {/*Horror*/}
      <button className="image-button">
        <img
          src={horrorImage}
          alt="Horror"
          style={{ filter: 'grayscale(1) invert(1)' }}
        />
        {horrorMovies && !loading && horrorMovies.length > 0 && (
          <div
            className="hover-poster poster"
            style={{
              backgroundImage: `url(${IMG_PATH + horrorMovies[0].poster_path})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '10px',
            }}
          />
        )}
      </button>

      {/*Romance*/}
      <button className="image-button">
        <img
          src={romanceImage}
          alt="Romance"
          style={{ filter: 'grayscale(1) invert(1)' }}
        />
        {romanceMovies && !loading && romanceMovies.length > 0 && (
          <div
            className="hover-poster poster"
            style={{
              backgroundImage: `url(${
                IMG_PATH + romanceMovies[0].poster_path
              })`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '10px',
            }}
          />
        )}
      </button>

      {/*Trending*/}
      <button className="image-button">
        <img
          src={trendingImage}
          alt="Trending"
          style={{ filter: 'grayscale(1) invert(1)' }}
        />
        {!loading && trendingMovies.length > 0 && (
          <div
            className="hover-poster poster"
            style={{
              backgroundImage: `url(${
                IMG_PATH + trendingMovies[0].poster_path
              })`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '10px',
            }}
          />
        )}
      </button>
    </div>
  );
}

export default NavigationGenre;
