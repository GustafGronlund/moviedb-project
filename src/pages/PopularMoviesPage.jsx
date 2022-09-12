import { useState } from "react";
import { useQuery } from "react-query";
import { Link, useSearchParams } from "react-router-dom";
import PopularMovies from "../components/PopularMovies";
import "../styles/PopularMoviesPage.scss";
import Footer from "../components/Footer";

const PopularMoviesPage = () => {
  return (
    <div>
      <PopularMovies />
      <footer></footer>
    </div>
  );
};

export default PopularMoviesPage;
