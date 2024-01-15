// const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

// async function fetchTrendingMovies() {
//   try {
//     const response = await fetch('/api/trending');
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching trending movies:", error);
//     return [];
//   }
// }

// function displayTrendingMovies(movies) {
//   const moviesList = document.getElementById("movies-list");
//   moviesList.innerHTML = ""; // clear out the existing movies

//   movies.forEach((movie) => {
//     const { poster_path, title } = movie;
//     const movieElement = document.createElement("div");
//     movieElement.classList.add("movie");
//     movieElement.innerHTML = `
//         <img src="${IMG_PATH + poster_path}" alt="${title}" />
//         <h3>${title}</h3>
//       `;
//     moviesList.appendChild(movieElement);
//   });
// }

// document.addEventListener("DOMContentLoaded", async () => {
//   try {
//     const trendingMovies = await fetchTrendingMovies();
//     displayTrendingMovies(trendingMovies);
//   } catch (error) {
//     console.error("Error loading trending movies:", error);
//   }
// });