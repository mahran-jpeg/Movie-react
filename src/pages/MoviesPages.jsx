import React, { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";
import Sidebar from "../components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import HomeMovieFiltered from "../UI/HomeMovieFiltered";
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";
import Spinner from "../UI/Spinner";
import MovieSkeleton from "../UI/MovieSkeleton";
import Skeleton from 'react-loading-skeleton';
import SkeletonTheme from 'react-loading-skeleton';
const MoviesPages = () => {
  const [input, setInput] = useState("");
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
 
  const change = (event) => {
    const lowercaseValue = event.target.value.toLowerCase();
    setInput(lowercaseValue);
  };

  async function fetchData() {
    if (input.trim() === "") {
      setErrorMessage("Please enter a valid value.");
      setMovies([]);
      setFilteredMovies([]);
      return;
    }
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?s=${input}&apikey=a6dcc2c2`
      );

      if (data.Response === "False") {
        setErrorMessage("No movies found. Please try again :) .");
        setMovies([]);
        setFilteredMovies([]);
      } else {
        setErrorMessage("");
        setMovies(data.Search);
        filterMovies(data.Search, input);
      }
      setLoading(false);
    } catch (error) {
      setMovies([]);
      setFilteredMovies([]);
    } finally {
      setLoading(false);
    }
  }

  const filterMovies = (movies, input) => {
    const filtered = movies.filter((movie) =>
      movie.Title.toLowerCase().includes(input)
    );
    setFilteredMovies(filtered);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      fetchData();
    }
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchData();
    }, 10000); 

    return () => clearTimeout(timeout);
  }, []);
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
                onKeyPress={handleKeyPress}
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
          {errorMessage && (
            <div className="noResultsWrapper">
              <p>
                <span className="message__noResult">{errorMessage}</span>
              </p>
            </div>
          )}

          {loading ? (
       <div className="movie__list__page">
        <>
            <MovieSkeleton />
            <MovieSkeleton />
            <MovieSkeleton />
            <MovieSkeleton />
            <MovieSkeleton />
            <MovieSkeleton />
          </>
       </div>
          ) : (
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