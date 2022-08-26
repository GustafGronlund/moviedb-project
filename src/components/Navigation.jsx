import { Link, NavLink } from "react-router-dom";
import "../styles/Navigation.scss";

const Navigation = () => {
  return (
    <header>
      <nav>
        <Link to="/">SWEFILMER</Link>
        <div>
          <Link to="/popularmovies">Popular</Link>
          <Link to="/nowplaying">NowPlaying</Link>
          <Link to="/topratedmovies">TopRated</Link>
          <Link to="/discover">Discover</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
