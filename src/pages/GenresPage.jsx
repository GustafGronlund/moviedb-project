import React from "react";
import { Link } from "react-router-dom";
import useGetGenres from "../hooks/useGetGenres";
import "../styles/GenresPage.scss";
import LoadingIndicator from "../components/LoadingIndicator";

const GenresPage = () => {
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  const { data: data, isLoading } = useGetGenres();

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <>
      <section className="genresMoviesList">
        {data?.genres.map((genre) => (
          <div className="genre-name-link-container">
            <Link
              to={`/genres/${genre.name}/${genre.id}`}
              className="genre-name-link"
              genre={genre.name}
              state={{ genre: genre.name }}
            >
              {genre.name}
            </Link>
          </div>
        ))}
      </section>
    </>
  );
};

export default GenresPage;
