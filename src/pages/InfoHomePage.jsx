import React from 'react';
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";
import Spinner from "../UI/Spinner";
const InfoHomePage = () => {
  const [selectedMovie, setSelectedMovie] = useState({});
  const {imdbId} = useParams();
  const [loading, setLoading] = useState(false);
  async function getData() {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?i=${imdbId}&plot=short&apikey=a6dcc2c2`
      );
      setSelectedMovie(data);

      if (data.Response === "False") {
        setSelectedMovie({});
      }
      setLoading(false);
    } catch (error) {
      setSelectedMovie({});
    } finally {
      setLoading(false);
    }
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
                  { loading ? (
                    <Spinner/>
                  ) : (
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
                            {selectedMovie?.Ratings?.[0]?.Value}
                          </p>
                        </div>
                        <p className="selected-product__para">
                          {selectedMovie?.Plot}
                        </p>
                        <button className="selected-product__add">Watch</button>
                      </div>
                    </div>
                  )}
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
