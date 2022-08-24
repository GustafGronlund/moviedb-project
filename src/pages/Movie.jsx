import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import * as api from "../services/TMDBAPI";

const Movie = () => {
  const { id } = useParams();
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  const { data, isLoading, isError, error } = useQuery(
    ["single-movie", id],
    api.getSingleMovie
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
        <div>
          <img src={`${imgUrl}${data.backdrop_path}`} />
          <h1>{data.original_title}</h1>
          <div>
            <p>Release date: {data.release_date}</p>
            <div>
              {data.genres.map((genre) => (
                <p>{genre.name}</p>
              ))}
            </div>
          </div>
          <p>{data.overview}</p>
          <div className="actors-container">
            {data.credits.cast.map((actor) => (
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                />
                <Link to={`/actor/${actor.id}`}>{actor.name}</Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Movie;
