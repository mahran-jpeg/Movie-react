
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faTicket } from "@fortawesome/free-solid-svg-icons/faTicket";
import { faFilm } from "@fortawesome/free-solid-svg-icons/faFilm";
<>
<div className="sidebar">
  <h2 className="sidebar__title">Menu</h2>
  <ul className="sidebar__links">

    <li className="sidebar__link__wrapper">
      <div className="sidebar__icon__wrapper">
        <FontAwesomeIcon icon={faHome} className="sidebar__icon" />
      </div>
      <a href="/" className="sidebar__link">
        Home
      </a>
    </li>
    <li className="sidebar__link__wrapper">
      <div className="sidebar__icon__wrapper">
        <FontAwesomeIcon icon={faFilm} className="sidebar__icon" />
      </div>
      <a href="/movies" className="sidebar__link">
        Movies
      </a>
    </li>
  
 
    <div className="thin-line"></div>;

    <li className="sidebar__link__wrapper">
      <div className="sidebar__icon__wrapper">
        <FontAwesomeIcon icon={faTicket} className="sidebar__icon" />
      </div>
      <a href="/plans" className="sidebar__link">
        Plans
      </a>
    </li>
    <li className="sidebar__link__wrapper">
      <div className="sidebar__icon__wrapper">
        <FontAwesomeIcon icon={faUser} className="sidebar__icon" />
      </div>
      <a href="/profile" className="sidebar__link">
        Profile
      </a>
    </li>
  
  </ul>
</div>
</>
const Test = () => {
  return (
  <>
  </>
  );
};

export default Test;
