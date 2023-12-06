const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');


//api movies
const APIKEY = process.env.APIKEY;

//All movies
const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}`;

router.get('/', async (req, res) => {
  try {
      const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Unable to fetch the data.' });
  }
});
//End of all movies

//Api movies Trending
const TRENDING_API_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${APIKEY}`;

router.get('/', async (req, res, next) => {
  try {
    const response = await fetch(TRENDING_API_URL);
    const data = await response.json();
    res.json(data.results);
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    res.status(500).json({ error: 'An error occurred while fetching trending movies' });
  }
});
//End of movies Trending

//Action Movies Section
const ACTION_API_URL = `https://api.themoviedb.org/3/action/movie/week?api_key=${APIKEY}`;

router.get('/', async (req, res, next) => {
  try {
    const response = await fetch(ACTION_API_URL);
    const data = await response.json();
    res.json(data.results);
  } catch (error) {
    console.error("Error fetching action movies:", error);
    res.status(500).json({ error: 'An error occurred while fetching action movies' });
  }
});

//End of movies Action

//Comedy Movies Section
const COMEDY_API_URL = `https://api.themoviedb.org/3/comedy/movie/week?api_key=${APIKEY}`;

router.get('/', async (req, res, next) => {
  try {
    const response = await fetch(COMEDY_API_URL);
    const data = await response.json();
    res.json(data.results);
  } catch (error) {
    console.error("Error fetching comedy movies:", error);
    res.status(500).json({ error: 'An error occurred while fetching comedy movies' });
  }
});
//End of movies Comedy

//Family Movies Section
const FAMILY_API_URL = `https://api.themoviedb.org/3/family/movie/week?api_key=${APIKEY}`;

router.get('/', async (req, res, next) => {
  try {
    const response = await fetch(FAMILY_API_URL);
    const data = await response.json();
    res.json(data.results);
  } catch (error) {
    console.error("Error fetching family movies:", error);
    res.status(500).json({ error: 'An error occurred while fetching family movies' });
  }
});
//End of movies Family

//Horror Movies Section
const HORROR_API_URL = `https://api.themoviedb.org/3/horror/movie/week?api_key=${APIKEY}`;

router.get('/', async (req, res, next) => {
  try {
    const response = await fetch(HORROR_API_URL);
    const data = await response.json();
    res.json(data.results);
  } catch (error) {
    console.error("Error fetching horror movies:", error);
    res.status(500).json({ error: 'An error occurred while fetching horror movies' });
  }
});
//End of movies Horror

//Drama Movies Section
const DRAMA_API_URL = `https://api.themoviedb.org/3/drama/movie/week?api_key=${APIKEY}`;

router.get('/', async (req, res, next) => {
  try {
    const response = await fetch(DRAMA_API_URL);
    const data = await response.json();
    res.json(data.results);
  } catch (error) {
    console.error("Error fetching drama movies:", error);
    res.status(500).json({ error: 'An error occurred while fetching drama movies' });
  }
});
//End of movies Drama

//Romance Movies Section
const ROMANCE_API_URL = `https://api.themoviedb.org/3/romance/movie/week?api_key=${APIKEY}`;

router.get('/', async (req, res, next) => {
  try {
    const response = await fetch(ROMANCE_API_URL);
    const data = await response.json();
    res.json(data.results);
  } catch (error) {
    console.error("Error fetching romance movies:", error);
    res.status(500).json({ error: 'An error occurred while fetching romance movies' });
  }
});
//End of movies Romance

// // Define the searchMovies function in the global scope
// export function searchMovies() {
//   const searchInput = document.getElementById("search-input");
//   const moviesContainer = document.getElementById("results-container");
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
//         moviesContainer.style.display = "none"; // Hide the movies container if nothing was found
//       }
//     })
//     .catch((error) => console.error(error));
// }

// function displayMovies(movies) {
//   const moviesContainer = document.getElementById("results-container");
//   const moviesList = moviesContainer.querySelector(".movies-list");
//   moviesList.innerHTML = ""; // Clear the container before adding new movies

//   moviesContainer.style.display = "flex";

//   movies.forEach((movie) => {
//     const movieElement = document.createElement("div");
//     movieElement.classList.add("movie");

//     const movieTitle = document.createElement("h2");
//     movieTitle.textContent = movie.title;

//     const movieOverview = document.createElement("p");
//     movieOverview.textContent = movie.overview;

//     const moviePoster = document.createElement("img");
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








module.exports = router;
