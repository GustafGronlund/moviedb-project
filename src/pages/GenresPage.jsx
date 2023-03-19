import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import * as api from "../services/TMDBAPI";
import useGetGenres from "../hooks/useGetGenres";
import "../styles/GenresPage.scss";
import { ColorRing } from "react-loader-spinner";

const GenresPage = () => {
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  const { data: data, isLoading } = useGetGenres();

  if (isLoading) {
    return (
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#222222", "#222222", "#222222", "#222222", "#222222"]}
      />
    );
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
