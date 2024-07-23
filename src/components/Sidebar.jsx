import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faTicket } from "@fortawesome/free-solid-svg-icons/faTicket";
import { faFilm } from "@fortawesome/free-solid-svg-icons/faFilm";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
<>
  <div className="sidebar" id="sidebar">
    <h2 className="sidebar__title">Menu</h2>
    <ul className="sidebar__links" id="sidebar__links">
      <li className="sidebar__link__wrapper">
        <Link className="sidebar__icon__wrapper" to ="/">
          <FontAwesomeIcon icon={faHome} className="sidebar__icon" />
        </Link>
        <Link to="/" className="sidebar__link">Home</Link>
      </li>
      <li className="sidebar__link__wrapper">
        <Link className="sidebar__icon__wrapper" to="/movies">
          <FontAwesomeIcon icon={faFilm} className="sidebar__icon" />
        </Link>
        <Link to ="/movies" className="sidebar__link">Movies</Link>
      </li>

      <div className="thin-line"></div>

      <li className="sidebar__link__wrapper">
        <Link className="sidebar__icon__wrapper" >
          <FontAwesomeIcon icon={faTicket} className="sidebar__icon" />
        </Link>
        <Link  className="sidebar__link">Plans</Link>
      </li>
      <li className="sidebar__link__wrapper profile__link__sidebar">
        <Link className="sidebar__icon__wrapper">
          <FontAwesomeIcon icon={faUser} className="sidebar__icon" />
        </Link>
        <Link className="sidebar__link">Profile</Link>
      </li>
    </ul>
  </div>
</>

  
  );
};

export default Sidebar;
