import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import styles from './movieList.module.css';

const RomanceList = () => {
  const [romanceMovies, setRomanceMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getRomanceMovies = async () => {
      const taskFromServer = await fetchData();
      setRomanceMovies(taskFromServer);
    };

    getRomanceMovies();
  }, []);

  async function fetchData() {
    try {
      setLoading(true); // Set loading state to true
      const response = await fetch('/api/movies/romance');
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
      <h2>Romance Movies</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        romanceMovies.map((romanceMovie) => (
          <Movie key={romanceMovie.id} movie={romanceMovie} />
        ))
      )}
    </div>
  );
};

export default RomanceList;
