import React from 'react';
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import axios from "axios";
const InfoHomePage = () => {
  const [selectedMovie, setSelectedMovie] = useState({});
  const {imdbId} = useParams();

  async function getData() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?i=${imdbId}&plot=full&apikey=a6dcc2c2`
    );
    setSelectedMovie(data);
  }

  useEffect(() => {
    getData();
  }, [imdbId]);

  return (
    <>
    <div className="app__container">
        <Sidebar/>
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
                          {selectedMovie?.Ratings?.[0]?.Value }
                        </p>
                      </div>
                      <p className="selected-product__para">
                      {selectedMovie?.Plot }
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
}

export default InfoHomePage;
