import React, { useState, useEffect } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, } from 'reactstrap';
// import './MovieCarousel.css'; 

const MovieCarousel = () => {
  const [movies, setMovies] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    fetch('/api/movies/')
      .then(response => response.json())
      .then(data => setMovies(data.results.slice(0, 3)))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === movies.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? movies.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const slides = movies.map((movie, index) => (
    <CarouselItem
      className="movie-carousel-item"
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={index}
    >
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
    </CarouselItem>
  ));

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      className="movie-carousel"
    >
      <CarouselIndicators items={movies} activeIndex={activeIndex} onClickHandler={setActiveIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
};

export default MovieCarousel;

// import React, { useState } from 'react';
// import {
//   Carousel,
//   CarouselItem,
//   CarouselControl,
//   CarouselIndicators,
// } from 'reactstrap';

// const items = [
//   {
//     src: 'https://image.tmdb.org/t/p/w500//zVMyvNowgbsBAL6O6esWfRpAcOb.jpg/id/123/1200/400',
//     key: 1,
//   },
//   {
//     src: 'https://image.tmdb.org/t/p/w500//qhb1qOilapbapxWQn9jtRCMwXJF.jpg/id/456/1200/400',
//     key: 2,
//   },
//   {
//     src: 'https://image.tmdb.org/t/p/w500//jojfbnIHGsRpodIood3OQoqA45Y.jpg/id/678/1200/400',
//     key: 3,
//   },
// ];

// function MovieCarousel(args) {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [animating, setAnimating] = useState(false);

//   const next = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
//     setActiveIndex(nextIndex);
//   };

//   const previous = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
//     setActiveIndex(nextIndex);
//   };

//   const goToIndex = (newIndex) => {
//     if (animating) return;
//     setActiveIndex(newIndex);
//   };

//   const slides = items.map((item) => {
//     return (
//       <CarouselItem
//         onExiting={() => setAnimating(true)}
//         onExited={() => setAnimating(false)}
//         key={item.src}
//       >
//         <img src={item.src} alt={item.altText} />
//       </CarouselItem>
//     );
//   });

//   return (
//     <Carousel
//       activeIndex={activeIndex}
//       next={next}
//       previous={previous}
//       {...args}
//     >
//       <CarouselIndicators
//         items={items}
//         activeIndex={activeIndex}
//         onClickHandler={goToIndex}
//       />
//       {slides}
//       <CarouselControl
//         direction="prev"
//         directionText="Previous"
//         onClickHandler={previous}
//       />
//       <CarouselControl
//         direction="next"
//         directionText="Next"
//         onClickHandler={next}
//       />
//     </Carousel>
//   );
// }

// export default MovieCarousel;
