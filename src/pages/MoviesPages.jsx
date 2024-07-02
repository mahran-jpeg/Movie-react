import React from "react";
import "../index.css";
import Sidebar from "../components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
const MoviesPages = () => {
  return (
    <>
      <div className="app__container">
        <Sidebar />
        <div className="app__container__right">
          <form class="moviepage__search">
            <div class="moviepage__search--input">
              <input type="text" placeholder="Search for a movie"  />
            </div>
            <div class="moviepage__search--button">
              <button type="submit">
                <FontAwesomeIcon icon={faSearch} className="icon__search" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MoviesPages;
