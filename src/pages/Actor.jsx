import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import * as api from "../services/TMDBAPI";

const Actor = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery(
    ["single-actor", id],
    api.getActor
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
          <img src={`https://image.tmdb.org/t/p/w200${data.profile_path}`} />
          <h2>{data.name}</h2>
          <p>{data.biography}</p>
          <div className="actor-cast-container">
            {data.credits.cast.map((movie) => (
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.backdrop_path}`}
                />
                <Link to={`/movie/${movie.id}`}>{movie.original_title}</Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Actor;
