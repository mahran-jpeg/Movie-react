import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons/faClock";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons/faEarthAmericas";
import "../index.css";
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const HomeMovie = ({image,title,imdbId}) => {

  return (
  <>
  <div className="movie">
                <figure className="movie__image__wrapper">
                  <img src={image} alt="Tenet" className="movie__img" />
                  <h3 className="movie__info__title">{title}</h3>
                  <div className="movie__info__list">
                    <div className="movie__info">
                   <Link to ={`/movie/home/${imdbId}`}className='movie__hover__button'>
                    Click for more
                    </Link>
                    </div>
                  </div>
                </figure>
          
              </div>
  </>
  );
}

export default HomeMovie;
