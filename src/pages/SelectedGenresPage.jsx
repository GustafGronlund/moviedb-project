import { useParams } from "react-router-dom";
import useGetMoviesByGenre from "../hooks/useGetMovieByGenre";
import Pagination from "../components/pagination";
import { useNavigate, NavLink } from "react-router-dom";
import { useSearchParams, useLocation } from "react-router-dom";
import "../styles/SelectedGenresPage.scss";

const SelectedGenresPage = () => {
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
  const page = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : null;
  const { id, name } = useParams();
  const { data: data, isLoading } = useGetMoviesByGenre(id, page);
  const navigate = useNavigate();
  const location = useLocation();
  const imgUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <>
      <section className="genres-movies-container">
        <div className="site-title">
          <h4 className="site-title-text">{name}</h4>
        </div>
        <section className="genresMovies">
          {data?.results.map((movie) => (
            <div className="genres-movie-div link">
              <div className="genres-movie-poster-container">
                <img
                  className="genres-movie-poster"
                  src={`${imgUrl}${movie.poster_path}`}
                />
              </div>
              <NavLink className="genres-movie-title" to={`/movie/${movie.id}`}>
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
              <p className="genres-movie-overview">{movie.overview}</p>
            </div>
          ))}
        </section>
        <Pagination
          page={data?.page}
          numPages={Math.ceil(data?.total_pages)}
          hasPreviousPage={data?.page !== 1}
          hasNextPage={data?.page !== data?.total_pages}
          onPreviousPage={() => setSearchParams({ page: -1 })}
          onNextPage={() => setSearchParams({ page: page + 1 })}
        />
      </section>
    </>
  );
};

export default SelectedGenresPage;
