import React from "react";
import { Link, useParams } from "react-router-dom";
import useMovie from "../hooks/useGetMovie";
import { useQuery } from "react-query";
import * as api from "../services/TMDBAPI";
import "../styles/Movie.scss";

const Movie = () => {
  const { id } = useParams();
  const { data: movie, isLoading } = useMovie(id);
  const imgUrl = "https://image.tmdb.org/t/p/w300";

  if (isLoading) {
    return "loading s0 sl0w... :(";
  }

  return (
    <>
      {movie && (
        <div className="movie-page-container">
          <div className="movie-page-img-container">
            <img src={`${imgUrl}${movie.poster_path}`} />
          </div>
          <div className="movie-page-second-container">
            <h1>{movie.original_title}</h1>
            <div className="movie-small-info-container">
              <div className="release-date-container">
                <p className="bold-text">Release date</p>
                <p>{movie.release_date}</p>
              </div>
              <div className="vote-average-container">
                <p className="bold-text">Imdb</p>
                <p>{movie.vote_average}</p>
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
