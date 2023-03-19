import React from "react";
import { NavLink, useSearchParams, useNavigate } from "react-router-dom";
import "../styles/NowPlayingMovies.scss";
import useGetNowPlaying from "../hooks/useGetNowPlaying";
import Pagination from "./pagination";
// import Scroll from "../hooks/useSmoothScroll";

// TODO : På pc så när man scrollar höger eller nedåt så scrollas container för desktop till höger, vice verse med vänster

const NowPlayingMovies = () => {
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
  const page = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : null;
  const navigate = useNavigate();
  const { data: data, isLoading } = useGetNowPlaying(page);
  const imgUrl = "https://image.tmdb.org/t/p/w500";

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
          {/* <Scroll /> */}
        </section>
        <Pagination
          page={data.page}
          numPages={Math.ceil(data.total_pages)}
          hasPreviousPage={data.page !== 1}
          hasNextPage={data.page !== data.total_pages}
          onPreviousPage={() => setSearchParams({ page: page - 1 })}
          onNextPage={() => setSearchParams({ page: page + 1 })}
        />
      </section>
    </>
  );
};

export default NowPlayingMovies;
