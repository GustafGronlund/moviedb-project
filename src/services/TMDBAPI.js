import axios from "axios";

const API_KEY = "870af7a7e82a463bd2c88eb97fc1f3e1";
const adultCont = "&include_adult=false";
const credits = "&append_to_response=credits";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

// Get popular movies
export const getPopularMovies = async () =>
  api
    .get(
      `/movie/popular?api_key=${API_KEY}&language=en-US&region=US&page=1${adultCont}`
    )
    .then((res) => res.data);

// Get single movies based on id
export const getSingleMovie = async (id) =>
  api
    .get(
      `/movie/${id}?api_key=${API_KEY}&language=en-US${adultCont}${credits},similar`
    )
    .then((res) => res.data);
