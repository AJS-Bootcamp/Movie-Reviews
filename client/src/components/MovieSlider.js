import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Movie from '../components/movies/Movie'; // Import the Movie component
// import styles from './styles.module.css'; // Import styles

const MovieSlider = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchUpcomingMovies = async () => {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/movie/upcoming', {
                    params: {
                        api_key: process.env.c7ca505670cee9f71026a8900d9e5f33,
                        language: 'en-US',
                        page: 1,
                        region: 'US', // Adjust region as needed
                    },
                });
                setMovies(response.data.results.slice(0, 5)); // Slice the top 5 upcoming movies
            } catch (error) {
                console.error('Error fetching upcoming movies:', error);
            }
        };

        fetchUpcomingMovies();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <div>
            <h2>Top 5 Upcoming Movies of the Week</h2>
            <Slider {...settings}>
                {movies.map(movie => (
                    <div key={movie.id}>
                        <Movie movie={movie} /> 
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default MovieSlider;
