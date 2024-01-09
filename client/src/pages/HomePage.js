import React from 'react';
import logo from '../app/assets/img/lightAJS.png';
import '../App.css';

function App() {
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

  // React.useEffect(() => {
  //   fetch('/api')
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => fetchData()}>Find Your Movies</button>
        <p>{!movies ? 'Loading...' : movies}</p>
      </header>
    </div>
  );
}

export default App;
