// const [toggle, setToggle] = useState(false);

// <button onClick={() => {
//      setToggle(!toggle)
//      toggle ? {<input type="text">} : null
// }}>
//      Search
// </button>

// import React, { useState } from 'react';

// function SearchBox() {
//   const [toggle, setToggle] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setToggle(!toggle)}>Search</button>
//       {toggle ? <input type="text" /> : null}
//     </div>
//   );
// }

// //we need to export this component so we can use it in other files
// export default SearchBox;

// export function toggleSearchBox() {
//   const searchBox = document.getElementById('searchBox');
//   const resultsContainer = document.getElementById('results-container');
//   searchBox.style.display =
//     searchBox.style.display === 'none' ? 'block' : 'none';

//   if (searchBox.style.display === 'none') {
//     resultsContainer.style.display = 'none';
//   }
// }

// // Define the searchMovies function in the global scope
// export function searchMovies() {
//   const searchInput = document.getElementById('search-input');
//   const moviesContainer = document.getElementById('results-container');
//   const searchQuery = searchInput.value;
//   const APIKEY = process.env.OPEN_MOVIE_API_KEY;
//   const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${searchQuery}`;

//   console.log(searchInput.value); //this was to check if the search bar was working, how many letters were typed in

//   fetch(apiUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       const movies = data.results;

//       if (movies.length > 0) {
//         displayMovies(movies); // Call the displayMovies function to show the movies
//       } else {
//         moviesContainer.style.display = 'none'; // Hide the movies container if nothing was found
//       }
//     })
//     .catch((error) => console.error(error));
// }

// function displayMovies(movies) {
//   const moviesContainer = document.getElementById('results-container');
//   const moviesList = moviesContainer.querySelector('.movies-list');
//   moviesList.innerHTML = ''; // Clear the container before adding new movies

//   moviesContainer.style.display = 'flex';

//   movies.forEach((movie) => {
//     const movieElement = document.createElement('div');
//     movieElement.classList.add('movie');

//     const movieTitle = document.createElement('h2');
//     movieTitle.textContent = movie.title;

//     const movieOverview = document.createElement('p');
//     movieOverview.textContent = movie.overview;

//     const moviePoster = document.createElement('img');
//     moviePoster.src = `https://image.tmdb.org/t/p/w1280${movie.poster_path}`;
//     moviePoster.alt = movie.title;

//     // movieElement.appendChild(movieOverview);
//     movieElement.appendChild(moviePoster);
//     movieElement.appendChild(movieTitle);

//     moviesList.appendChild(movieElement);
//   });

//   moviesContainer.scrollIntoView();
// }

// /*END OF SEARCH MOVIES SECTION*/

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBox = ({ posts, setSearchResults }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(posts);
    const resultsArray = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(e.target.value) ||
        post.body.toLowerCase().includes(e.target.value)
    );
    setSearchResults(resultsArray);
  };

  return (
    <>
      <form className="search" onSubmit={handleSubmit}>
        <div
          className="search__container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <input
            className="search__input"
            type="text"
            id="search"
            placeholder="Search your movies..."
            onChange={handleSearchChange}
            style={{ backgroundColor: isHovered ? 'white' : 'transparent' }}
          />
          <button
            className="search__button "
            type="submit"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ backgroundColor: isHovered ? 'white' : 'transparent' }}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchBox;
