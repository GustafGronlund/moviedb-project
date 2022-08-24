import React from "react";
import { useQuery } from "react-query";
import * as api from "../services/TMDBAPI";

const PopularMovies = () => {
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  // popular-movies är nyckel i cache för att separera mot andra querys, nästa är api-call
  const { data } = useQuery("popular-movies", api.getPopularMovies);
  console.log("datan:", data);
  return (
    <>
      <h4>20 most popular movies</h4>
      <section className="popularMovies">
        {data?.results.map((movie) => (
          <div>
            <img key={movie.id} src={`${imgUrl}${movie.poster_path}`} />
            <p key={movie.id}>{movie.original_title}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default PopularMovies;
