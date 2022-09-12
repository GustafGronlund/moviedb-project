import React from "react";
import { useQuery } from "react-query";
import { Link, NavLink } from "react-router-dom";
import Marquee from "react-fast-marquee";
import * as api from "../services/TMDBAPI";
import "../styles/TopRatedMovies.scss";

const TopRatedMovies = () => {
  // länk till movies-id
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  // popular-movies är nyckel i cache för att separera mot andra querys, nästa är api-call
  const { data, isLoading, isError, error } = useQuery(
    "toprated-movies",
    api.getTopRatedMovies
  );
  console.log("datan:", data);

  const link = document.querySelectorAll(".link");
  const hoverReveal = document.querySelectorAll(".hover-reveal");
  const linkImages = document.querySelectorAll(".hidden-img");

  for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("mousemove", (e) => {
      hoverReveal[i].style.opacity = 1;
      hoverReveal[i].style.transform = `translate(-100%, -50%) rotate(5deg)`;
      linkImages[i].style.transform = "scale(1,1)";
      hoverReveal[i].style.left = e.clientX + "px";
    });
    link[i].addEventListener("mouseleave", (e) => {
      hoverReveal[i].style.opacity = 0;
      hoverReveal[i].style.transform = `translate(-50%, -50%) rotate(-5deg)`;
      linkImages[i].style.transform = "scale(0.8, 0.8)";
    });
  }

  if (isLoading) {
    return "it's loading";
  }

  if (isError) {
    return "something went wrong";
  }

  return (
    <>
      <section className="toprated-movies-container">
        <div className="site-title">
          <h4 className="site-title-text">TOP RATED</h4>
        </div>
        <section className="topratedMovies">
          {data?.results.map((movie) => (
            <div className="toprated-movie-div link">
              <img
                className="toprated-movie-poster"
                src={`${imgUrl}${movie.poster_path}`}
              />
              <NavLink
                className="toprated-movie-title"
                to={`/movie/${movie.id}`}
              >
                <p key={movie.id}>{movie.original_title}</p>
              </NavLink>
              <div className="hover-reveal image01">
                <img
                  src={`${imgUrl}${movie.poster_path}`}
                  alt="movie-poster"
                  className="hidden-img"
                />
              </div>
              <p className="toprated-movie-overview">{movie.overview}</p>
            </div>
          ))}
        </section>
      </section>
    </>
  );
};

export default TopRatedMovies;
