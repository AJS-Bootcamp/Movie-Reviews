import React, { useState } from 'react';

import logo from '../app/assets/img/MoviesAJS.png';

import '../App.css';
import NavigationGenre from '../components/NavigationGenre';
import TrendingList from '../components/movies/trendingList';
import ActionList from '../components/movies/actionList';
import AnimationList from '../components/movies/animationList';
import ComedyList from '../components/movies/comedyList';
import DramaList from '../components/movies/dramaList';
import FamilyList from '../components/movies/familyList';
import HorrorList from '../components/movies/horrorList';
import RomanceList from '../components/movies/romanceList';

function Homepage() {
  const [trendingMovies, setTrendingMovies] = React.useState([]);
  const [actionMovies, setActionMovies] = React.useState([]);
  const [animationMovies, setAnimationMovies] = React.useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [dramaMovies, setDramaMovies] = useState([]);
  const [familyMovies, setFamilyMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [romanceMovies, setRomanceMovies] = useState([]);

  const [loading, setLoading] = useState(false);

  //TRENDING MOVIES
  async function fetchTrendingData() {
    try {
      setLoading(true); //loading state to true
      const response = await fetch('/api/movies/trending'); //this is the endepoint we are calling
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setTrendingMovies(data);
    } catch (error) {
      console.log(`Error Fetching Trending Movies Data: ${error.message}`);
    } finally {
      setLoading(false); // This will run regardless of success or failure
    }
  }

  //ACTION MOVIES
  async function fetchActionData() {
    try {
      setLoading(true);
      const response = await fetch('/api/movies/action');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setActionMovies(data);
    } catch (error) {
      console.log(`Error Fetching Action Movies Data: ${error.message}`);
    } finally {
      setLoading(false);
    }
  }

  //ANIMATION MOVIES
  async function fetchAnimationData() {
    try {
      setLoading(true);
      const response = await fetch('/api/movies/animation');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setAnimationMovies(data);
    } catch (error) {
      console.log(`Error Fetching Animation Movies Data: ${error.message}`);
    } finally {
      setLoading(false);
    }
  }

  //COMEDY MOVIES
  async function fetchComedyData() {
    try {
      setLoading(true);
      const response = await fetch('/api/movies/comedy');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setComedyMovies(data);
    } catch (error) {
      console.log(`Error Fetching Comedy Movies Data: ${error.message}`);
    } finally {
      setLoading(false);
    }
  }

  //DRAMA MOVIES
  async function fetchDramaData() {
    try {
      setLoading(true);
      const response = await fetch('/api/movies/drama');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setDramaMovies(data);
    } catch (error) {
      console.log(`Error Fetching Drama Movies Data: ${error.message}`);
    } finally {
      setLoading(false);
    }
  }

  //FAMILY MOVIES
  async function fetchFamilyData() {
    try {
      setLoading(true);
      const response = await fetch('/api/movies/family');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setFamilyMovies(data);
    } catch (error) {
      console.log(`Error Fetching Family Movies Data: ${error.message}`);
    } finally {
      setLoading(false);
    }
  }

  //HORROR MOVIES
  async function fetchHorrorData() {
    try {
      setLoading(true);
      const response = await fetch('/api/movies/horror');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setHorrorMovies(data);
    } catch (error) {
      console.log(`Error Fetching Horror Movies Data: ${error.message}`);
    } finally {
      setLoading(false);
    }
  }

  //ROMANCE MOVIES
  async function fetchRomanceData() {
    try {
      setLoading(true);
      const response = await fetch('/api/movies/romance');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setRomanceMovies(data);
    } catch (error) {
      console.log(`Error Fetching Romance Movies Data: ${error.message}`);
    } finally {
      setLoading(false);
    }
  }

  // Call these functions when the component mounts
  React.useEffect(() => {
    fetchTrendingData();
    fetchActionData();
    fetchAnimationData();
    fetchComedyData();
    fetchDramaData();
    fetchFamilyData();
    fetchHorrorData();
    fetchRomanceData();
  }, []);

  return (
    <div className="App">
      <div className="App-background-Logo">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          style={{ filter: 'grayscale(1) invert(1)' }}
        />
        <h1>Carrousel</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <NavigationGenre />
      </div>
      <div>
        {loading ? <p>Loading...</p> : <TrendingList movies={trendingMovies} />}
      </div>

      <div>
        {loading ? <p>Loading...</p> : <ActionList movies={actionMovies} />}
      </div>

      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <AnimationList movies={animationMovies} />
        )}
      </div>

      <div>
        {loading ? <p>Loading...</p> : <ComedyList movies={comedyMovies} />}
      </div>

      <div>
        {loading ? <p>Loading...</p> : <DramaList movies={dramaMovies} />}
      </div>

      <div>
        {loading ? <p>Loading...</p> : <FamilyList movies={familyMovies} />}
      </div>

      <div>
        {loading ? <p>Loading...</p> : <HorrorList movies={horrorMovies} />}
      </div>

      <div>
        {loading ? <p>Loading...</p> : <RomanceList movies={romanceMovies} />}
      </div>
    </div>
  );
}

export default Homepage;
