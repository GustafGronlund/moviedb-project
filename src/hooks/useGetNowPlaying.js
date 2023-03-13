import { useQuery } from "react-query";
import TMDBAPI from "../services/TMDBAPI.js";

const useGetNowPlaying = (page) => {
  return useQuery(
    ["now-playing", { page }],
    () => TMDBAPI.getNowPlaying(page),
    { keepPreviousData: true }
  );
};

export default useGetNowPlaying;
