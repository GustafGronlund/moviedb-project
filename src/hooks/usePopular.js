import { useQuery } from "react-query";
import TMDBAPI from "../services/TMDBAPI.js";

const usePopular = (page) => {
  return useQuery(["popular", { page }], () => TMDBAPI.getPopularMovies(page), {
    keepPreviousData: true,
  });
};

export default usePopular;
