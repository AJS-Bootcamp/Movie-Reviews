import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import styles from './movieList.module.css';

const AnimationList = () => {
  const [animationMovies, setAnimationMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAnimationMovies = async () => {
      const taskFromServer = await fetchData();
      setAnimationMovies(taskFromServer);
    };

    getAnimationMovies();
  }, []);

  async function fetchData() {
    try {
      setLoading(true); // Set loading state to true
      const response = await fetch('/api/movies/animation');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(`Error Fetching Data: ${error.message}`);
    } finally {
      setLoading(false); // Set loading state to false when done
    }
  }

  return (
    <div className={styles.movieList}>
      <h2>Animation Movies</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        animationMovies.map((animationMovie) => (
          <Movie key={animationMovie.id} movie={animationMovie} />
        ))
      )}
    </div>
  );
};

export default AnimationList;
