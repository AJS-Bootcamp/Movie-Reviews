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

//Search
const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}`;
router.get('/search', async (req, res, next) => {
  try {
    const response = await fetch(searchUrl + `&query=${req.query.movie}`);
    const data = await response.json();
    res.json(data.results);
  } catch (error) {
    console.error('Error searching movies:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while fetching searching movies' });
  }
});

//Api movies Trending
const TRENDING_API_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${APIKEY}`;

router.get('/trending', async (req, res, next) => {
  try {
    const response = await fetch(TRENDING_API_URL);
    const data = await response.json();
    res.json(data.results);
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while fetching trending movies' });
  }
});
//End of movies Trending

//Action Movies Section
const ACTION_API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=28`;

router.get('/action', async (req, res, next) => {
  try {
    const response = await fetch(ACTION_API_URL);
    const data = await response.json();
    res.json(data.results);
  } catch (error) {
    console.error('Error fetching action movies:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while fetching action movies' });
  }
});

//End of movies Action

//Comedy Movies Section
const COMEDY_API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=35`;

router.get('/comedy', async (req, res, next) => {
  try {
    const response = await fetch(COMEDY_API_URL);
    const data = await response.json();
    res.json(data.results);
  } catch (error) {
    console.error('Error fetching comedy movies:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while fetching comedy movies' });
  }
});
//End of movies Comedy

//Family Movies Section
const FAMILY_API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=10751`;

router.get('/family', async (req, res, next) => {
  try {
    const response = await fetch(FAMILY_API_URL);
    const data = await response.json();
    res.json(data.results);
  } catch (error) {
    console.error('Error fetching family movies:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while fetching family movies' });
  }
});
//End of movies Family

//Horror Movies Section
const HORROR_API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=27`;

router.get('/horror', async (req, res, next) => {
  try {
    const response = await fetch(HORROR_API_URL);
    const data = await response.json();
    res.json(data.results);
  } catch (error) {
    console.error('Error fetching horror movies:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while fetching horror movies' });
  }
});
//End of movies Horror

//Drama Movies Section
const DRAMA_API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=18`;

router.get('/drama', async (req, res, next) => {
  try {
    const response = await fetch(DRAMA_API_URL);
    const data = await response.json();
    res.json(data.results);
  } catch (error) {
    console.error('Error fetching drama movies:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while fetching drama movies' });
  }
});
//End of movies Drama

//Romance Movies Section
const ROMANCE_API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=10749`;

router.get('/romance', async (req, res, next) => {
  try {
    const response = await fetch(ROMANCE_API_URL);
    const data = await response.json();
    res.json(data.results);
  } catch (error) {
    console.error('Error fetching romance movies:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while fetching romance movies' });
  }
});
//End of movies Romance

//Animation Movies Section
const ANIMATION_API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=16`;

router.get('/animation', async (req, res, next) => {
  try {
    const response = await fetch(ANIMATION_API_URL);
    const data = await response.json();
    res.json(data.results);
  } catch (error) {
    console.error('Error fetching animation movies:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while fetching animation movies' });
  }
});
//End of movies Animation

module.exports = router;
