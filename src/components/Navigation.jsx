import { Link, NavLink } from "react-router-dom";
import "../styles/Navigation.scss";
import { MdMovie } from "react-icons/md";
import { useState } from "react";
import moviereel from "../assets/scss/gifs/moviereel.gif";
import backgroundGif from "../assets/scss/gifs/background_gif.gif";

const Navigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const mobileMenuActive = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
      <header>
        <Link className="header-logo" to="/">
          🎥 FilmFiesta
        </Link>
        <nav className="menu-desktop">
          <ul>
            <Link to="/popularmovies">POPULAR</Link>
            <Link to="/nowplaying">NOW PLAYING</Link>
            <Link to="/topratedmovies">TOP RATED</Link>
            <Link to="/genres">GENRES</Link>
          </ul>
        </nav>
        <div
          className={
            toggleMenu
              ? "mobile-menu-container-active"
              : "mobile-menu-container-false"
          }
          onClick={mobileMenuActive}
        >
          <span
            className={
              toggleMenu ? "mobile-menu-line-first-active" : "mobile-menu-line"
            }
          ></span>
          <span
            className={
              toggleMenu ? "mobile-menu-line-second-active" : "mobile-menu-line"
            }
          ></span>
          <span
            className={
              toggleMenu ? "mobile-menu-line-third-active" : "mobile-menu-line"
            }
          ></span>
        </div>
      </header>

      <ul className={toggleMenu ? "mobile-menu-true" : "mobile-menu-false"}>
        <Link
          onClick={mobileMenuActive}
          to="/popularmovies"
          className="mobile-menu-item"
        >
          POPULAR
        </Link>
        <Link
          onClick={mobileMenuActive}
          to="/nowplaying"
          className="mobile-menu-item"
        >
          NOW PLAYING
        </Link>
        <Link
          onClick={mobileMenuActive}
          to="/topratedmovies"
          className="mobile-menu-item"
        >
          TOP RATED
        </Link>
        <Link
          onClick={mobileMenuActive}
          to="/genres"
          className="mobile-menu-item"
        >
          GENRES
        </Link>
      </ul>
    </>
  );
};

export default Navigation;
