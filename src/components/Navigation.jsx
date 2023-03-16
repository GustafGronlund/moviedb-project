import { Link, NavLink } from "react-router-dom";
import "../styles/Navigation.scss";
import { MdMovie } from "react-icons/md";
import { useState } from "react";
import { gsap } from "gsap";
import moviereel from "../assets/scss/gifs/moviereel.gif";

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
            <Link to="/popularmovies">Popular</Link>
            <Link to="/nowplaying">Now Playing</Link>
            <Link to="/topratedmovies">Top Rated</Link>
            <Link to="/discover">Discover</Link>
          </ul>
        </nav>
        <div className="mobile-menu-container">
          <a onClick={mobileMenuActive} className="mobile-menu-btn">
            MENU
          </a>
        </div>
      </header>
      <ul className={toggleMenu ? "mobile-menu-true" : "mobile-menu-false"}>
        <Link to="/popularmovies" className="mobile-menu-item">
          Popular
        </Link>
        <Link to="/nowplaying" className="mobile-menu-item">
          Now Playing
        </Link>
        <Link to="/topratedmovies" className="mobile-menu-item">
          Top Rated
        </Link>
        <Link to="/discover" className="mobile-menu-item">
          Discover
        </Link>
      </ul>
    </>
  );
};

export default Navigation;
