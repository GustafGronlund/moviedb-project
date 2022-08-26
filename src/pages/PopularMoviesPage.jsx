import React from "react";
import { Link } from "react-router-dom";
import PopularMovies from "../components/PopularMovies";
import "../styles/PopularMoviesPage.scss";

const PopularMoviesPage = () => {
  return (
    <div>
      <PopularMovies />
    </div>
  );
};

export default PopularMoviesPage;
