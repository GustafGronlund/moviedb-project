import React from "react";
import { useQuery } from "react-query";
import { Link, NavLink } from "react-router-dom";
import Marquee from "react-fast-marquee";
import * as api from "../services/TMDBAPI";
import "../styles/NowPlayingMovies.scss";

const NowPlayingMovies = () => {
  // länk till movies-id
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  // popular-movies är nyckel i cache för att separera mot andra querys, nästa är api-call
  const { data, isLoading, isError, error } = useQuery(
    "nowplaying-movies",
    api.getLatestMovies
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
      <section className="nowplaying-movies-container">
        <div className="site-title">
          <h4 className="site-title-text">NOW PLAYING</h4>
        </div>
        <section className="nowplayingMovies">
          {data?.results.map((movie) => (
            <div className="nowplaying-movie-div link">
              <img
                className="nowplaying-movie-poster"
                src={`${imgUrl}${movie.poster_path}`}
              />
              <NavLink
                to={`/movie/${movie.id}`}
                className="nowplaying-movie-title"
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
              <p className="popular-movie-overview">{movie.overview}</p>
            </div>
          ))}
        </section>
      </section>
    </>
  );
};

export default NowPlayingMovies;
