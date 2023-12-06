const express = require('express');
const router = express.Router();

let movies = [
  {
    Title: 'The Lion King',
    Year: '2019',
    Runtime: '118 min',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Mowgli: Legend of the Jungle',
    Year: '2018',
    Runtime: '104 min',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg',
  },
  {
    Title: 'Doctor Strange',
    Year: '2016',
    Runtime: '115 min',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg',
  },
  {
    Title: 'John Wick',
    Year: '2014',
    Runtime: '101 min',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg',
  },
  {
    Title: 'The Notebook',
    Year: '2004',
    Runtime: '123 min',
  },
];

router.get('/', (req, res) => {
  res.json(movies);
});


//api movies
// const fetch = require('node-fetch');
let fetch;

import('node-fetch').then(nodeFetch => {
  fetch = nodeFetch;
});

const APIKEY = process.env.OPEN_MOVIE_API_KEY;
const TRENDING_API_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${APIKEY}`;

//Api movies
router.get('/trending', async (req, res, next) => {
  try {
    const response = await fetch(TRENDING_API_URL);
    const data = await response.json();
    res.json(data.results);
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    res.status(500).json({ error: 'An error occurred while fetching trending movies' });
  }
});



module.exports = router;
