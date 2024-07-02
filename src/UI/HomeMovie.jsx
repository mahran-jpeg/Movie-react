import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons/faClock";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons/faEarthAmericas";
import "../index.css";
const HomeMovie = ({image,title}) => {
  return (
  <>
  <div className="movie">
                <figure className="movie__image__wrapper">
                  <img src={image} alt="Tenet" className="movie__img" />
                  <h3 className="movie__info__title">{title}</h3>
                  <div className="movie__info__list">
                    <div className="movie__info">
                   <button className='movie__hover__button'>
                    Click for more
                    </button>
                    </div>
                  </div>
                </figure>
          
              </div>
  </>
  );
}

export default HomeMovie;
