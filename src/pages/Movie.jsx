import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import * as api from "../services/TMDBAPI";
import "../styles/Movie.scss";

const Movie = () => {
  const { id } = useParams();
  const imgUrl = "https://image.tmdb.org/t/p/w300";
  const { data, isLoading, isError, error } = useQuery(
    ["single-movie", id],
    api.getMovie
  );

  if (isLoading) {
    return "loading s0 sl0w... :(";
  }

  if (isError) {
    return "error :/";
  }

  console.log(data);

  return (
    <>
      {data && (
        <div className="movie-page-container">
          <div className="movie-page-img-container">
            <img src={`${imgUrl}${data.poster_path}`} />
          </div>
          <div className="movie-page-second-container">
            <h1>{data.original_title}</h1>
            <div className="movie-small-info-container">
              <p>Release date: {data.release_date}</p>
              <p>Imdb: {data.vote_average}</p>
            </div>
            <p className="movie-biography">{data.overview}</p>
            <div className="movie-actors-container">
              {data.credits.cast.map((actor) => (
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
