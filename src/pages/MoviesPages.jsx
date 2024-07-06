import React, { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";
import Sidebar from "../components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import HomeMovieFiltered from "../UI/HomeMovieFiltered";

const MoviesPages = () => {
  const [input, setInput] = useState("");
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [message, setMessage] = useState(false);
  const [movieDisplay, setMovieDisplay] = useState(true);


  const change = (event) => {
    const lowercaseValue = event.target.value.toLowerCase();
    setInput(lowercaseValue);
  };

  async function fetchData() {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?s=${input}&apikey=a6dcc2c2`
    );

    setMovies(data.Search);
    filterMovies(data.Search, input);
  }

  const filterMovies = (movies, input) => {
    const filtered = movies.filter((movie) =>
      movie.Title.toLowerCase().includes(input)
    );
    setFilteredMovies(filtered);
  };

  return (
    <>
      <div className="app__container">
        <Sidebar />
        <div className="app__container__right">
          <div className="moviepage__search">
            <div className="moviepage__search--input">
              <input
                type="text"
                placeholder="Search for a movie"
                value={input}
                onChange={change}
              />
            </div>
            <div className="moviepage__search--button">
              <button
                type="button"
                onClick={() => {
                  fetchData();
                 
                }}
              >
                <FontAwesomeIcon icon={faSearch} className="icon__search" />
              </button>
            </div>
          </div>
          {message && (
            <div className="noResultsWrapper">
              <span className="message__noResult">
                No Results For You My Friend
              </span>
            </div>
          )}
          {movieDisplay && (
            <div className="movie__list__page">
              {filteredMovies.slice(0, 6).map((movie) => (
                <HomeMovieFiltered key={movie.imdbID} movie={movie} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MoviesPages;
