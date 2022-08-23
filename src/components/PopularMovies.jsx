import React from "react";
import { useQuery } from "react-query";
import * as api from "../services/TMDBAPI";

const PopularMovies = () => {
  // popular-movies är nyckel i cache för att separera mot andra querys, nästa är api-call
  const { data } = useQuery("popular-movies", api.getPopularMovies);
  console.log("datan:", data);
  return <div></div>;
};

export default PopularMovies;
