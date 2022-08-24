import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import * as api from "../services/TMDBAPI";

const PopularMovies = () => {
  // länk till movies-id
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  // popular-movies är nyckel i cache för att separera mot andra querys, nästa är api-call
  const { data, isLoading, isError, error } = useQuery(
    "popular-movies",
    api.getPopularMovies
  );
  console.log("datan:", data);

  if (isLoading) {
    return "it's loading";
  }

  if (isError) {
    return "something went wrong";
  }

  return (
    <>
      <h4>20 most popular movies</h4>
      <section className="popularMovies">
        {data?.results.map((movie) => (
          <div>
            <img src={`${imgUrl}${movie.poster_path}`} />
            <p key={movie.id}>{movie.original_title}</p>
            <Link
              to={`/movie/${movie.id}`}
              onClick={() => {
                console.log(movie.id);
              }}
            >
              read more
            </Link>
          </div>
        ))}
      </section>
    </>
  );
};

export default PopularMovies;
