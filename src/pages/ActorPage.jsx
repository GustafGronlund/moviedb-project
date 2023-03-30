import React from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/ActorPage.scss";
import useGetActor from "../hooks/useGetActor";
import LoadingIndicator from "../components/LoadingIndicator";

const ActorPage = () => {
  const { id } = useParams();
  const { data: data, isLoading } = useGetActor(id);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <>
      {data && (
        <div className="actor-page-container">
          <div className="actor-page-img-container">
            <img src={`https://image.tmdb.org/t/p/w200${data.profile_path}`} />
          </div>
          <div className="actor-page-second-container">
            <h1>{data.name}</h1>
            <p className="actor-biography">{data.biography}</p>
            <div className="actor-actors-container">
              {data.movie_credits.cast.map((movie) => (
                <div className="actor-cast-person-container">
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.backdrop_path}`}
                  />
                  <Link to={`/movie/${movie.id}`}>{movie.original_title}</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ActorPage;
