import { useQuery } from "react-query";
import * as api from "../services/TMDBAPI";

const useSingleMovie = () => {
  return useQuery("single-movie", api.getSingleMovie);
};

export default useSingleMovie;
