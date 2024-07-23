
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InterstellarImg from "../images/interstellar.jpg";
import G0G2Img from "../images/postertest.jpg";
import HomecomingImg from "../images/postertest3.jpg";
import CWOImg from "../images/s-l1600.jpg";
import TenetImg from "../images/tenet.jpg";
import InfinityWarImg from "../images/avenger wars.jpg";
import { faClock } from "@fortawesome/free-solid-svg-icons/faClock";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons/faEarthAmericas";
import HomeMovie from "../UI/HomeMovie";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
const HomeMovies = () => {

  return (
    <>
      <div className="container movie__container">
        <div className="row movie__row">
          
              <h3 className="movie__search__title">Trending movies :</h3>
            
            <div className="all__movie__stuff">
              <div className="movie__list">
              <HomeMovie
    image={TenetImg}
    title={"Tenet"}
    imdbId={"tt6723592"}
  />

  <HomeMovie
    image={G0G2Img}
    title={"Guardians of The Galaxy Vol. 2"}
    imdbId={"tt3896198"}
  />

  <HomeMovie
    image={HomecomingImg}
    title={"Spider-Man: Homecoming"}
    imdbId={"tt2250912"}
  />
  <HomeMovie
    image={CWOImg}
    title={"A Clockwork Orange"}
    imdbId={"tt0066921"}
  />
  <HomeMovie
    image={InterstellarImg}
    title={"Interstellar"}
    imdbId={"tt0816692"}
  />
  <HomeMovie
    image={InfinityWarImg}
    title={"Avengers: Infinity War"}
    imdbId={"tt4154756"}
  />
              </div>
            
            </div>
          
        </div>
      </div>
    </>
  );
};

export default HomeMovies;
