import { useQuery } from "react-query";
import TMDBAPI from "../services/TMDBAPI.js";

const useGetActor = (id) => {
  return useQuery(["actor", id], () => TMDBAPI.getActor(id));
};

export default useGetActor;
