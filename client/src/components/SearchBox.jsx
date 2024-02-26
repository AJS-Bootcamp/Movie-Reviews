import React, { useState, useCallback, useEffect, useRef } from 'react';
import Movie from '../components/movies/Movie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const SearchBox = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const fetchData = useCallback(async (movie) => {
    try {
      setLoading(true); // Set loading state to true

      const response = await fetch(`/api/movies/search?movie=${movie}`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      console.log(data);
      return Array.isArray(data) ? data : data.results;
    } catch (error) {
      console.log(`Error Fetching Data: ${error.message}`);
      return []; // Return an empty array if there's an error
    } finally {
      setLoading(false); // Set loading state to false when done
    }
  }, []);

  const handleSearch = async (e) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyPress = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent form submission
      setMovies([]); // Clear the previous results
      setShowPopup(true);
      const taskFromServer = await fetchData(searchQuery);
      if (Array.isArray(taskFromServer)) {
        setMovies(taskFromServer);
      } else {
        console.error('API response is not an array');
      }
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const popupRef = useRef(null);

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowPopup(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        className="search-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <input
          type="text"
          placeholder="Search your movie..."
          value={searchQuery}
          onChange={handleSearch}
          onKeyPress={handleKeyPress}
          style={{ backgroundColor: isHovered ? 'white' : 'transparent' }}
          id="search"
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
        {loading ? (
          <p>Loading...</p>
        ) : (
          showPopup && (
            <div className="popup" ref={popupRef}>
              <button onClick={closePopup}>
                Close
                <FontAwesomeIcon icon={faCircleXmark} />
              </button>
              <h4>Search Results</h4>
              <div className="search-results">
                {Array.isArray(movies) && movies.length > 0 ? (
                  movies.slice(0, 8).map((movie) => (
                    <div key={movie.id} className="movie-poster-container">
                      <Movie movie={movie} />
                      <img
                        className="movie-poster"
                        src={movie.posterUrl}
                        alt={movie.title}
                      />
                    </div>
                  ))
                ) : (
                  <h3>No results found</h3>
                )}
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default SearchBox;
