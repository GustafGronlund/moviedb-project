import { Link, NavLink } from "react-router-dom";
import "../styles/Navigation.scss";
import { MdMovie } from "react-icons/md";
import { useState } from "react";
import { gsap } from "gsap";
import moviereel from "../assets/scss/gifs/moviereel.gif";
import backgroundGif from "../assets/scss/gifs/background_gif.gif";

const Navigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

  tl.to(".mobile-menu-false", { y: "100%", duration: 1 });
  tl.to(".mobile-menu-item", {
    opacity: 1,
    duration: 1,
    stagger: 0.25,
    transform: "translateX(0)",
  });

  const mobileMenuActive = () => {
    setToggleMenu(!toggleMenu);

    if (toggleMenu) {
      tl.reverse();
    }
  };

  return (
    <>
      <header>
        <Link className="header-logo" to="/">
          <img src={moviereel} alt="loading..." />
        </Link>
        <nav className="menu-desktop">
          <ul>
            <Link to="/popularmovies">POPULAR</Link>
            <Link to="/nowplaying">NOW PLAYING</Link>
            <Link to="/topratedmovies">TOP RATED</Link>
            <Link to="/genres">GENRES</Link>
          </ul>
        </nav>
        <div className="mobile-menu-container">
          <a onClick={mobileMenuActive} className="mobile-menu-btn">
            MENU
          </a>
        </div>
      </header>
      <div
        className={
          toggleMenu ? "noice-background-true" : "noise-background-false"
        }
      ></div>
      <ul className={toggleMenu ? "mobile-menu-true" : "mobile-menu-false"}>
        <Link to="/popularmovies" className="mobile-menu-item">
          POPULAR
        </Link>
        <Link to="/nowplaying" className="mobile-menu-item">
          NOW PLAYING
        </Link>
        <Link to="/topratedmovies" className="mobile-menu-item">
          TOP RATED
        </Link>
        <Link to="/genres" className="mobile-menu-item">
          GENRES
        </Link>
      </ul>
    </>
  );
};

export default Navigation;
