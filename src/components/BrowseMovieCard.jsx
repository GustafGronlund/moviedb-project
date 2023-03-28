import { NavLink } from "react-router-dom";

const BrowseMovieCard = ({ poster, title, overview, id }) => {
  const imgUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <>
      <div className="movie-div link">
        <div className="movie-poster-container">
          <img className="movie-poster" src={`${imgUrl}${poster}`} />
        </div>
        <NavLink className="movie-title" to={`/movie/${id}`}>
          <p key={id}>{title}</p>
        </NavLink>
        <div className="hover-reveal image01">
          <img
            src={`${imgUrl}${poster}`}
            alt="movie-poster"
            className="hidden-img"
          />
        </div>
        <p className="movie-overview">{overview}</p>
        <button className="mobile-button">
          {" "}
          <NavLink to={`/movie/${id}`}>
            <a>See more</a>
          </NavLink>
        </button>
      </div>
    </>
  );
};

export default BrowseMovieCard;
