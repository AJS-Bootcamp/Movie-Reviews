import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import styles from './movieList.module.css';

const ActionList = () => {
  const [actionMovies, setActionMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getActionMovies = async () => {
      const taskFromServer = await fetchData();
      setActionMovies(taskFromServer);
    };

    getActionMovies();
  }, []);

  async function fetchData() {
    try {
      setLoading(true); // Set loading state to true
      const response = await fetch('/api/movies/action');
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
      <h2>Action Movies</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        actionMovies.map((actionMovie) => (
          <Movie key={actionMovie.id} movie={actionMovie} />
        ))
      )}
    </div>
  );
};

export default ActionList;
