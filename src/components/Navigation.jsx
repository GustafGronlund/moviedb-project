import { Link, NavLink } from "react-router-dom";
import "../styles/Navigation.scss";

const Navigation = () => {
  return (
    <>
      <header>
        <Link to="/">SWEFILMER</Link>
        <nav className="menu-desktop">
          <div>
            <Link to="/popularmovies">Popular</Link>
            <Link to="/nowplaying">NowPlaying</Link>
            <Link to="/topratedmovies">TopRated</Link>
            <Link to="/discover">Discover</Link>
          </div>
        </nav>
        <div className="menu-btn">
          <div className="menu-btn__burger"></div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
