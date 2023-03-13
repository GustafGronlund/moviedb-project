import { useQuery } from "react-query";
import TMDBAPI from "../services/TMDBAPI.js";

const useGetTopRated = (page) => {
  return useQuery(["top-rated", { page }], () => TMDBAPI.getTopRated(page), {
    keepPreviousData: true,
  });
};

export default useGetTopRated;
