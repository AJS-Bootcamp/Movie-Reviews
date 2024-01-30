// import { useState, useEffect } from 'react';
// import Movie from '../components/movies/Movie';

// const TrendingPage = () => {
//   const [trendingMovies, setTrendingMovies] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const getTrendingMovies = async () => {
//       const taskFromServer = await fetchData();
//       setTrendingMovies(taskFromServer);
//     };

//     getTrendingMovies();
//   }, []);

//   async function fetchData() {
//     try {
//       setLoading(true); // Set loading state to true
//       const response = await fetch('/api/movies/trending');
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       console.log(data);
//       return data;
//     } catch (error) {
//       console.log(`Error Fetching Data: ${error.message}`);
//     } finally {
//       setLoading(false); // Set loading state to false when done
//     }
//   }

//   return (
//     <div className='trending-page'>
//       <h2>Trending Movies</h2>
//       <div className="trending-grid">
//         {loading ? (
//           <p>Loading...</p>
//         ) : (
//           trendingMovies.map((trendingMovie) => (
//             <Movie key={trendingMovie.id} movie={trendingMovie} />
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default TrendingPage;

import { useState, useEffect } from 'react';
import styles from '../styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';

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
      <div className={styles.overlay}>
        <div className={styles.movieDetails}>
          <h3>{title}</h3>
          <p>{overview}</p>
        </div>
      </div>
      <div className={styles.icons}>
        {!starClicked ? (
          <FontAwesomeIcon
            onClick={(e) => setStarClicked(!starClicked)}
            className={styles.starUnselected}
            icon={faStar}
            size="2xl"
          />
        ) : (
          <FontAwesomeIcon
            onClick={(e) => setStarClicked(!starClicked)}
            className={styles.starSelected}
            icon={faStar}
            size="2xl"
          />
        )}
        {!checkClicked ? (
          <FontAwesomeIcon
            onClick={(e) => setCheckClicked(!checkClicked)}
            className={styles.checkUnselected}
            icon={faCircleCheck}
            size="2xl"
          />
        ) : (
          <FontAwesomeIcon
            onClick={(e) => setCheckClicked(!checkClicked)}
            className={styles.checkSelected}
            icon={faCircleCheck}
            size="2xl"
          />
        )}
      </div>
    </div>
  );
};

const TrendingPage = () => {
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
      const response = await fetch('/api/movies/trending');

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
      <h2 className={styles.movieSectionHeading}>Trending Movies</h2>
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

export default TrendingPage;
