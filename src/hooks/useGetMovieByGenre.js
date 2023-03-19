import { useQuery } from "react-query";
import TMDBAPI from "../services/TMDBAPI";

const useGetMovieByGenre = (id, page) => {
  return useQuery(
    ["moviesbygenre", { id, page }],
    () => TMDBAPI.getMoviesByGenre(id, page),
    { keepPreviousData: true }
  );
};

export default useGetMovieByGenre;
