import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import styles from './movieList.module.css';

const FamilyList = () => {
  const [familyMovies, setFamilyMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getFamilyMovies = async () => {
      const taskFromServer = await fetchData();
      setFamilyMovies(taskFromServer);
    };

    getFamilyMovies();
  }, []);

  async function fetchData() {
    try {
      setLoading(true); // Set loading state to true
      const response = await fetch('/api/movies/family');
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
      <h2>Family Movies</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        familyMovies.map((familyMovie) => (
          <Movie key={familyMovie.id} movie={familyMovie} />
        ))
      )}
    </div>
  );
};

export default FamilyList;
