import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import * as api from "../services/TMDBAPI";

const PopularMovies = () => {
  // länk till movies-id
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  // popular-movies är nyckel i cache för att separera mot andra querys, nästa är api-call
  const { data, isLoading, isError, error } = useQuery(
    ["discover-movies"],
    api.discoverMovies
  );

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
        {/* <Marquee
          pauseOnHover={true}
          direction="right"
          speed={30}
          gradient={false}
        > */}
        {data?.results.map((movie) => (
          <div className="movie-div">
            <img src={`${imgUrl}${movie.poster_path}`} />
            <Link to={`/movie/${movie.id}`}>{movie.original_title}</Link>
            <p key={movie.id}>{movie.original_title}</p>
          </div>
        ))}
        {/* </Marquee> */}
      </section>
    </>
  );
};

export default PopularMovies;
