import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import styles from './movieList.module.css';

const HorrorList = () => {
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getHorrorMovies = async () => {
      const taskFromServer = await fetchData();
      setHorrorMovies(taskFromServer);
    };

    getHorrorMovies();
  }, []);

  async function fetchData() {
    try {
      setLoading(true); // Set loading state to true
      const response = await fetch('/api/movies/horror');
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
      <h2>Horror Movies</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        horrorMovies.map((horrorMovie) => (
          <Movie key={horrorMovie.id} movie={horrorMovie} />
        ))
      )}
    </div>
  );
};

export default HorrorList;
