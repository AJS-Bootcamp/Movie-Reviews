import React from 'react';
import logo from '../app/assets/img/MoviesAJS.png';
import '../App.css';
import NavigationGenre from '../components/NavigationGenre';

function Homepage() {
  const [movies, setMovies] = React.useState(null);

  async function fetchData() {
    try {
      const response = await fetch('/api');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      setMovies(data);
    } catch (error) {
      console.log(`Error Fetching Data: ${error.message}`);
    }
  }

  return (
    <div className="App">
      <div className="App-background-Logo">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => fetchData()}>Find Your Movies</button>
        <p>{!movies ? 'Loading...' : movies}</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <NavigationGenre />
      </div>
    </div>
  );
}

export default Homepage;
