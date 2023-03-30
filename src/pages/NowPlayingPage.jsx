import { useSearchParams, useNavigate } from "react-router-dom";
import useGetNowPlaying from "../hooks/useGetNowPlaying";
import BrowseMovieCard from "../components/BrowseMovieCard";
import LoadingIndicator from "../components/LoadingIndicator";
import "../styles/BrowseMoviesPageStyling.scss";
import Pagination from "../components/Pagination";

const NowPlayingPage = () => {
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
  const page = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : null;
  const navigate = useNavigate();
  const { data: movies, isLoading } = useGetNowPlaying(page);
  const imgUrl = "https://image.tmdb.org/t/p/w500";

  console.log(movies);

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
    return <LoadingIndicator />;
  }

  return (
    <>
      <section className="browse-movies-container">
        <div className="genre-title">
          <h4 className="genre-title-text">Now Playing</h4>
        </div>
        <section className="movies-container">
          {movies?.results.map((movie) => (
            <BrowseMovieCard
              poster={movie.poster_path}
              title={movie.original_title}
              overview={movie.overview}
              id={movie.id}
              vote={movie.vote_average}
              date={movie.release_date}
              genre={movie.genre_ids}
            />
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

export default NowPlayingPage;
