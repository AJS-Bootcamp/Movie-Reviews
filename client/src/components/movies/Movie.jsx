import React from 'react';
import styles from './movieList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';

const Movie = ({movie}) => {
  const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

  const {poster_path, title, overview} = movie;

  return (
    <div className={styles.movieContainer}>
      <img className={styles.moviePoster} src={`${IMG_PATH + poster_path}`} alt={`${title} Poster`} />
      <div className={styles.movieDetails}>
        <h3>{title}</h3>
        <p>{overview}</p>
      </div>
      <div className={styles.icons}>
            <FontAwesomeIcon className={styles.star} icon={faStar} size="2xl" />
            <FontAwesomeIcon
              className={styles.check}
              icon={faCircleCheck}
              size="2xl"
            />
      </div>
    </div>
  );
};

export default Movie;
