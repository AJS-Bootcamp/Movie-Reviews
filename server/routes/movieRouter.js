const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');


//api movies
const APIKEY = process.env.APIKEY;
const TRENDING_API_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${APIKEY}`;

//Api movies

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



module.exports = router;
