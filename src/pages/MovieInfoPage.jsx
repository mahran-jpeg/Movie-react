import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import TenetImg from "../images/tenet.jpg";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const MovieInfoPage = () => {
  const [selectedMovie, setSelectedMovie] = useState('');
  const { imdbID } = useParams();
 

    async function getData() {
      console.log(imdbID);
      const { data } = await axios.get(
    `https://www.omdbapi.com/?s=${imdbID}&apikey=a6dcc2c2`
      );
      console.log(data);
      setSelectedMovie(data);

    }
useEffect(()=>{
  getData()
},[])

  return (
    <>
      <div className="app__container">
        <Sidebar />
        <div className="app__container__right">
          <div className="movies__main">
            <div className="container">
              <div className="row">
                <div className="row product-page__row">
                  <div className="selected-product">
                    <div className="selected-product__left">
                      <figure className="selected-product__img__wrapper">
                        <img
                          src={selectedMovie?.Poster}
                          alt=""
                          className="selected-product__img"
                        />
                      </figure>
                    </div>
                    <div className="selected-product__right">
                      <h1 className="selected-product__title">
                        {selectedMovie?.Title}
                      </h1>
                      <div className="selected-movie__details">
                        <p className="movie__details__release-date">
                          {selectedMovie?.Released}
                        </p>
                        <p className="movie__details__runtime">
                          {selectedMovie?.Runtime}
                        </p>
                        <p className="movie__details__rating">
                        {selectedMovie?.Ratings?.[0]?.Value ?? 'N/A'}
                        </p>
                      </div>
                      <p className="selected-product__para">
                        In a twilight world of international espionage, an
                        unnamed CIA operative, known as The Protagonist, is
                        recruited by a mysterious organization called Tenet to
                        participate in a global assignment that unfolds beyond
                        real time. The mission: prevent Andrei Sator, a renegade
                        Russian oligarch with precognition abilities, from
                        starting World War III. The Protagonist will soon master
                        the art of "time inversion" as a way of countering the
                        threat that is to come.
                      </p>
                      <button className="selected-product__add">Watch</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieInfoPage;