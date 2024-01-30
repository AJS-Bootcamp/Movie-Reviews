import React, { useState} from 'react';
import Movie from './Movie';
import styles from './movieList.module.css';

const Favorites = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);


  return (
    <div className={styles.trendingList}>
      <h2>Favorites</h2>
        {favoriteMovies.map((favorite) => (
          <Movie key={favorite.id} movie={favorite} />
        ))}
    </div>
  );
};

export default Favorites;
