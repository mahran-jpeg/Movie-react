import React from "react";
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
const HomeMovies = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="all__movie__stuff">
            <div className="movie__searching__results">
              <h3 className="movie__search__title">Trending movies :</h3>
            </div>
            <div className="movie__list">
              <HomeMovie image={TenetImg} title={"Tenet"} />

              <HomeMovie
                image={G0G2Img}
                title={" Guardians of The Galaxy Vol. 2"}
              />

              <HomeMovie
                image={HomecomingImg}
                title={" Spider-Man: Homecoming"}
              />
              <HomeMovie image={CWOImg} title={"A Clockwork Orange"} />
              <HomeMovie image={InterstellarImg} title={"Interstellar"} />
              <HomeMovie
                image={InfinityWarImg}
                title={"Avengers: Infinity War"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeMovies;
