import React from "react";
import { Link, useParams } from "react-router-dom";
import useMovie from "../hooks/useGetMovie";
import "../styles/Movie.scss";
import LoadingIndicator from "../components/LoadingIndicator";
import { FaStar } from "react-icons/fa";

const Movie = () => {
  const { id } = useParams();
  const { data: movie, isLoading } = useMovie(id);
  const imgUrl = "https://image.tmdb.org/t/p/w300";

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <>
      {movie && (
        <div className="movie-page-container">
          <div className="movie-page-img-container">
            <img src={`${imgUrl}${movie.poster_path}`} />
          </div>
          <div className="movie-page-second-container">
            <h1 className="desktop-movie-title">{movie.original_title}</h1>
            <div className="mobile-movie-title">
              <h1>{movie.original_title}</h1>
              <div className="vote-average-container">
                <FaStar />
                <p>{Math.round(movie.vote_average * 10) / 10}</p>
              </div>
            </div>
            <div className="genre-container">
              {movie.genres.map((genre) => {
                return (
                  <div className="badge">
                    <p>{genre.name}</p>
                  </div>
                );
              })}
            </div>
            <div className="movie-small-info-container">
              <div className="release-date-container">
                <p className="bold-text">Release date</p>
                <p>{movie.release_date.substring(0, 4)}</p>
              </div>
              <div className="vote-average-container">
                <FaStar />
                <p>{Math.round(movie.vote_average * 10) / 10}</p>
              </div>
            </div>
            <p className="movie-biography">{movie.overview}</p>
            <div className="movie-actors-container">
              {movie.credits.cast.map((actor) => (
                <div className="movie-cast-person-container">
                  <img
                    src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  />
                  <Link to={`/actor/${actor.id}`}>{actor.name}</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Movie;
