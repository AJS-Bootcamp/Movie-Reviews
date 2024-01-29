import React, { useState } from 'react';
import styles from './movieList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const Movie = ({ movie }) => {
  const [starClicked, setStarClicked] = useState(false);
  const [checkClicked, setCheckClicked] = useState(false);


  const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

  const { poster_path, title, overview } = movie;


  return (
    <div className={styles.movieContainer}>
      <img
        className={styles.moviePoster}
        src={`${IMG_PATH + poster_path}`}
        alt={`${title} Poster`}
      />
      <div className={styles.movieDetails}>
        <h3>{title}</h3>
        <p>{overview}</p>
      </div>
      <div className={styles.icons}>
        <FontAwesomeIcon 
          onClick={(e) => setStarClicked(!starClicked)}
          className={starClicked ? styles.starGold : styles.starWhite} 
          icon={faStar} 
          size="2xl" 
        />
        <FontAwesomeIcon
          onClick={(e) => setCheckClicked(!checkClicked)}
          className={checkClicked ? styles.checkRed : styles.checkWhite}
          icon={faCircleCheck}
          size="2xl"
        />
      </div>
    </div>
  );
};

export default Movie;
