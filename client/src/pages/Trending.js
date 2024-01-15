//MOVIE API SECTION//
const APIKEY = process.env.OPEN_MOVIE_API_KEY;
const TRENDING_API_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${APIKEY}`;
const API_URL = 'https://api.themoviedb.org/3/discover/movie';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

//TRENDING MOVIES SECTION//
async function fetchTrendingMovies() {
  try {
    const response = await fetch(TRENDING_API_URL);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return [];
  }
}

function displayTrendingMovies(movies) {
  const popularSection = document.getElementById('trending');
  const moviesList = popularSection.querySelector('.movies-list');
  moviesList.innerHTML = ''; // clear out the existing movies

  movies.forEach((movie) => {
    const { poster_path, title } = movie;
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');
    movieElement.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="${title}" />
        <h3>${title}</h3>
      `;
    moviesList.appendChild(movieElement);
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const trendingMovies = await fetchTrendingMovies();
    displayTrendingMovies(trendingMovies);
  } catch (error) {
    console.error('Error loading trending movies:', error);
  }
});
//END of TRENDING MOVIES SECTION//
