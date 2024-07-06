import React from 'react';
import { Link } from 'react-router-dom';

const HomeMovieFiltered = ({ movie }) => {
  return (
    <div className="all__movies__stuff">
 <div className="movie">
      <figure className="movie__image__wrapper">
        <img src={movie.Poster} className="movie__img" />
        <h3 className="movie__info__title">{movie.Title}</h3>
        <div className="movie__info__list">
          <div className="movie__info">
            <Link to="/" className="movie__hover__button">
              Click for more
            </Link>
          </div>
        </div>
      </figure>
    </div>
    </div>
   
  );
};

export default HomeMovieFiltered;