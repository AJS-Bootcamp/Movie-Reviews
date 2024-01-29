import { useState, useEffect } from 'react';
import styles from '../styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';

const Movie = ({ movie }) => {
  const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

  const { poster_path, title, overview } = movie;

  return (
    <div className={styles.movieContainer}>
      <img
        className={styles.moviePoster}
        src={`${IMG_PATH + poster_path}`}
        alt={`${title} Poster`}
      />
      <div className={styles.overlay}>
        <div className={styles.movieDetails}>
          <h3>{title}</h3>
          <p>{overview}</p>
        </div>
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

const FamilyPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      const taskFromServer = await fetchData();
      setMovies(taskFromServer);
    };

    getMovies();
  }, []);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch('/api/movies/family');

      if (!response.ok) {
        throw new Error('Unable to fetch movies. Status: ', response.staus);
      }

      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error fetching data', error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.testPage}>
      <h2 className={styles.movieSectionHeading}>Family Movies</h2>
      <div className={styles.actionGrid}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          movies.map((movie) => <Movie key={movie.id} movie={movie} />)
        )}
      </div>
    </div>
  );
};

export default FamilyPage;
