import React, { useEffect, useState } from 'react';
import Movie from './Movie';


const TrendingList = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    const getTrendingMovies = async () => {
      const taskFromServer = await fetchData();
      setTrendingMovies(taskFromServer);
    };

    getTrendingMovies();
  }, []);

  async function fetchData() {
    try {
      setLoading(true); // Set loading state to true
      const response = await fetch('/api/movies/trending');
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
    <div className="trending-list">
      <h2>Trending Movies </h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
          trendingMovies.map((trendingMovie) => (
            <Movie key={trendingMovie.id} movie={trendingMovie} />
          ))
      )}
    </div>
  );
};

export default TrendingList;
