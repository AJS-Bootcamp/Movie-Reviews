import React from 'react';

const Movie = ({movie}) => {
  const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

  const {poster_path, title, overview} = movie

  return (
    <div className="movie-container">
      <img className='movie-poster' src={`${IMG_PATH + poster_path}`} alt={`${title} Poster`} />
      <div className='movie-details'>
        <h3>{title}</h3>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default Movie;
