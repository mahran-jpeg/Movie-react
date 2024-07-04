import React, { useEffect } from "react";
import axios from "axios";
import "../index.css";
import Sidebar from "../components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
const MoviesPages = () => {
  async function fetchData(){
    console.log(axios.get(' http://www.omdbapi.com/?i=tt3896198&apikey=a6dcc2c2'))
  }
 
  useEffect(()=>{
    fetchData()
  },[]);

  return (
    <>
      <div className="app__container">
        <Sidebar />
        <div className="app__container__right">
          <form className="moviepage__search">
            <div className="moviepage__search--input">
              <input type="text" placeholder="Search for a movie"  />
            </div>
            <div className="moviepage__search--button">
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
