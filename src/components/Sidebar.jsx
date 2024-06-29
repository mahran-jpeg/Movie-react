import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faTicket } from "@fortawesome/free-solid-svg-icons/faTicket";
import { faFilm } from "@fortawesome/free-solid-svg-icons/faFilm";

const Sidebar = () => {
  return (
<>
  <div className="sidebar">
    <h2 className="sidebar__title">Menu</h2>
    <ul className="sidebar__links">
      <li className="sidebar__link__wrapper">
        <a className="sidebar__icon__wrapper" href="/">
          <FontAwesomeIcon icon={faHome} className="sidebar__icon" />
        </a>
        <a href="/" className="sidebar__link">Home</a>
      </li>
      <li className="sidebar__link__wrapper">
        <a className="sidebar__icon__wrapper" href="/movies">
          <FontAwesomeIcon icon={faFilm} className="sidebar__icon" />
        </a>
        <a href="/movies" className="sidebar__link">Movies</a>
      </li>

      <div className="thin-line"></div>

      <li className="sidebar__link__wrapper">
        <a className="sidebar__icon__wrapper" href="/plans">
          <FontAwesomeIcon icon={faTicket} className="sidebar__icon" />
        </a>
        <a href="/plans" className="sidebar__link">Plans</a>
      </li>
      <li className="sidebar__link__wrapper">
        <a className="sidebar__icon__wrapper" href="/profile">
          <FontAwesomeIcon icon={faUser} className="sidebar__icon" />
        </a>
        <a href="/profile" className="sidebar__link">Profile</a>
      </li>
    </ul>
  </div>
</>

  
  );
};

export default Sidebar;
