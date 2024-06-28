import React from 'react';
import HeaderImg from'../images/moviebackground.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket } from '@fortawesome/free-solid-svg-icons/faTicket';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faGear } from '@fortawesome/free-solid-svg-icons/faGear';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import Sidebar from './Sidebar';
const Header = () => {
  return (
<>
    <section id="heading">
      <div className="movie__background">
        <figure className="movie__background__wrapper">
          
          <img src={HeaderImg} alt="" />
        </figure>
        <div className="movie__background__text">
          <h1 className="movie__background__title">
            Ticket <span className="red">+</span>
          </h1>
          <h3 className="movie__background__para">
            With over 3000 movies on Ticket<span className="red">+</span>, the possibilities are endless!
          </h3>
          <div className="movie__input__wrapper">
            <input
              type="text"
              className="movie__input"
              placeholder="Find a movie"
              style={{ color: 'ed' }}
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} className="movie__search" />
          </div>
        </div>
      </div>
    </section>
</>
  
  );
}

export default Header;
