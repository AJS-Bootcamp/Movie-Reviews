import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import styles from './movieList.module.css';

const ComedyList = () => {
  const [comedyMovies, setComedyMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getComedyMovies = async () => {
      const taskFromServer = await fetchData();
      setComedyMovies(taskFromServer);
    };

    getComedyMovies();
  }, []);

  async function fetchData() {
    try {
      setLoading(true); // Set loading state to true
      const response = await fetch('/api/movies/comedy');
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
      <h2>Comedy Movies</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        comedyMovies.map((comedyMovie) => (
          <Movie key={comedyMovie.id} movie={comedyMovie} />
        ))
      )}
    </div>
  );
};

export default ComedyList;
