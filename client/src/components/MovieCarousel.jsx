// import React, { useState, useEffect } from 'react';
// import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const MovieCarousel = () => {
//   const [movies, setMovies] = useState([]);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [animating, setAnimating] = useState(false);

//   useEffect(() => {
//     fetch('/api/movies/')
//       .then(response => response.json())
//       .then(data => setMovies(data.results.slice(0, 3)))
//       .catch(error => console.error('Error fetching movies:', error));
//   }, []);

//   const next = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === movies.length - 1 ? 0 : activeIndex + 1;
//     setActiveIndex(nextIndex);
//   }

//   const previous = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === 0 ? movies.length - 1 : activeIndex - 1;
//     setActiveIndex(nextIndex);
//   }

//   const slides = movies.map((movie, index) => (
//     <CarouselItem
//       className="movie-carousel-item"
//       onExiting={() => setAnimating(true)}
//       onExited={() => setAnimating(false)}
//       key={index}
//     >
//       <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
//     </CarouselItem>
//   ));

//   return (
//     <Carousel
//       activeIndex={activeIndex}
//       next={next}
//       previous={previous}
//       className="movie-carousel"
//     >
//       <CarouselIndicators items={movies} activeIndex={activeIndex} onClickHandler={setActiveIndex} />
//       {slides}
//       <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
//       <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
//     </Carousel>
//   );
// };

// export default MovieCarousel;

import React, { useState, useEffect } from 'react';
import './MovieCarousel.css'; 

const MovieCarousel = () => {
  const [movies, setMovies] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetch('/api/movies/')
      .then(response => response.json())
      .then(data => setMovies(data.results.slice(0, 3)))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  const next = () => {
    const nextIndex = (activeIndex + 1) % movies.length;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    const nextIndex = (activeIndex - 1 + movies.length) % movies.length;
    setActiveIndex(nextIndex);
  }

  return (
    <div className="movie-carousel">
      {movies.map((movie, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === activeIndex ? 'active' : ''}`}
        >
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
        </div>
      ))}
      <button className="carousel-control prev" onClick={previous}>Previous</button>
      <button className="carousel-control next" onClick={next}>Next</button>
    </div>
  );
};

export default MovieCarousel;


