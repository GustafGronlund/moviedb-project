import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import * as api from "../services/TMDBAPI";
import useGetGenres from "../hooks/useGetGenres";
import "../styles/GenresPage.scss";

const GenresPage = () => {
  // länk till movies-id
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  // popular-movies är nyckel i cache för att separera mot andra querys, nästa är api-call
  const { data: data, isLoading } = useGetGenres();

  console.log("datan:", data);

  if (isLoading) {
    return "it's loading";
  }

  return (
    <>
      {/* <h4>20 most popular movies</h4>
      <section className="popularMovies">
        {data?.results.map((movie) => (
          <div className="movie-div">
            <img src={`${imgUrl}${movie.poster_path}`} />
            <Link
              to={`/movie/${movie.id}`}
              onClick={() => {
                console.log(movie.id);
              }}
            >
              {movie.original_title}
            </Link>
            <p key={movie.id}>{movie.original_title}</p>
          </div>
        ))}
      </section> */}
      <section className="genresMovies">
        {data?.genres.map((genre) => (
          <a href="" className="genre-name-link">
            {genre.name}
          </a>
        ))}
      </section>
    </>
  );
};

export default GenresPage;
