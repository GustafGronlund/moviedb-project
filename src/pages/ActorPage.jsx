import React from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/ActorPage.scss";
import useGetActor from "../hooks/useGetActor";

const ActorPage = () => {
  const { id } = useParams();
  const { data: data, isLoading } = useGetActor(id);

  if (isLoading) {
    return "loading s0 sl0w... :(";
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
            {data.movie_credits.cast.map((movie) => (
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

export default ActorPage;
