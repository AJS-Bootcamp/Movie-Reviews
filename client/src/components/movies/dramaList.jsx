import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import styles from './movieList.module.css';

const DramaList = () => {
  const [dramaMovies, setDramaMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getDramaMovies = async () => {
      const taskFromServer = await fetchData();
      setDramaMovies(taskFromServer);
    };

    getDramaMovies();
  }, []);

  async function fetchData() {
    try {
      setLoading(true); // Set loading state to true
      const response = await fetch('/api/movies/drama');
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
      <h2>Drama Movies</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        dramaMovies.map((dramaMovie) => (
          <Movie key={dramaMovie.id} movie={dramaMovie} />
        ))
      )}
    </div>
  );
};

export default DramaList;
