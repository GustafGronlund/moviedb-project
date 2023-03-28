import { useParams } from "react-router-dom";
import useGetMoviesByGenre from "../hooks/useGetMovieByGenre";
import Pagination from "../components/Pagination";
import { useNavigate, NavLink } from "react-router-dom";
import { useSearchParams, useLocation } from "react-router-dom";
import BrowseMovieCard from "../components/BrowseMovieCard";
import LoadingIndicator from "../components/LoadingIndicator";
import "../styles/BrowseMoviesPageStyling.scss";

const SelectedGenresPage = () => {
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
  const page = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : null;
  const { id, name } = useParams();
  const { data: movies, isLoading } = useGetMoviesByGenre(id, page);
  const navigate = useNavigate();
  const location = useLocation();

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <>
      <section className="browse-movies-container">
        <div className="genre-title">
          <h4 className="genre-title-text">{name}</h4>
        </div>
        <section className="movies-container">
          {movies?.results.map((movie) => (
            <BrowseMovieCard
              poster={movie.poster_path}
              title={movie.original_title}
              overview={movie.overview}
              id={movie.id}
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

export default SelectedGenresPage;
