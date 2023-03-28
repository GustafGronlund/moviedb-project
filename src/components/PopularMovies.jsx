import React from "react";
import { useNavigate, useSearchParams, NavLink } from "react-router-dom";
import Pagination from "./pagination";
import usePopular from "../hooks/usePopular";

const PopularMovies = () => {
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
  const page = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : null;
  const navigate = useNavigate();
  const { data: movies, isLoading } = usePopular(page);
  const imgUrl = "https://image.tmdb.org/t/p/w500";

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
    return "It's loading";
  }

  return (
    <>
      <section className="popular-movies-container">
        <div className="site-title">
          <h4 className="site-title-text">POPULAR</h4>
        </div>
        <section className="popularMovies">
          {movies?.results.map((movie) => (
            <div className="popular-movie-div link">
              <div className="popular-movie-poster-container">
                <img
                  className="popular-movie-poster"
                  src={`${imgUrl}${movie.poster_path}`}
                />
              </div>
              <NavLink
                className="popular-movie-title"
                to={`/movie/${movie.id}`}
              >
                <p key={movie.id}>{movie.original_title}</p>
              </NavLink>
              <div></div>
              <div className="hover-reveal image01">
                <img
                  src={`${imgUrl}${movie.poster_path}`}
                  alt="movie-poster"
                  className="hidden-img"
                />
              </div>
              <p className="popular-movie-overview">{movie.overview}</p>
              <button className="mobile-button">
                {" "}
                <NavLink to={`/movie/${movie.id}`}>
                  <a>See more</a>
                </NavLink>
              </button>
            </div>
          ))}
        </section>

        <Pagination
          page={movies.page}
          numPages={Math.ceil(movies.total_pages)}
          hasPreviousPage={movies.page !== 1}
          hasNextPage={movies.page !== movies.total_pages}
          onPreviousPage={() => setSearchParams({ page: page - 1 })}
          onNextPage={() => setSearchParams({ page: page + 1 })}
        />
      </section>
    </>
  );
};

export default PopularMovies;
