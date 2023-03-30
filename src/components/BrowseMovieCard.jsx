import { NavLink } from "react-router-dom";
import "../styles/BrowseMovieCard.scss";
import { FaStar } from "react-icons/fa";

const BrowseMovieCard = ({
  poster,
  title,
  overview,
  id,
  vote,
  date,
  genre,
}) => {
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  const releaseDate = date.substring(0, 4);
  const voteAverage = Math.round(vote * 10) / 10;

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
        <div className="movie-details">
          <p>{releaseDate}</p>
          <div className="vote-container">
            <FaStar />
            <p>{voteAverage}</p>
          </div>
        </div>
        {/* <p className="movie-overview">{overview}</p> */}
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
