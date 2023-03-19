import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

const requestOptions = {
  params: {
    api_key: import.meta.env.VITE_API_KEY,
    language: "en-US",
    include_adult: false,
    region: "SE",
  },
};

//importing the API-key from .env file
const API_KEY_IMPORT = import.meta.env.VITE_API_KEY;

//adding API info to the key so I do not need to add it every time
const API_KEY = `?api_key=${API_KEY_IMPORT}`;

//Creating a variable for not including adult
const ADULT = "&include_adult=false";

//function that makes the rest of the functions shorter and easier to read ;)
const get = async (endpoint, options) => {
  const res = await axios.get(endpoint, options);

  return res.data;
};

const getPopularMovies = (page = 1) => {
  return get(`${BASE_URL}/movie/popular?&page=${page}`, requestOptions);
};

const getTopRated = (page = 1) => {
  return get(`${BASE_URL}/movie/top_rated?&page=${page}`, requestOptions);
};

const getNowPlaying = (page = 1) => {
  return get(`${BASE_URL}/movie/now_playing?&page=${page}`, requestOptions);
};

const getGenres = () => {
  return get(`${BASE_URL}/genre/movie/list`, requestOptions);
};

const getMoviesByGenre = (id, page) => {
  return get(
    `${BASE_URL}/discover/movie?&with_genres=${id}&page=${page}`,
    requestOptions
  );
};

const getMovie = (id) => {
  return get(
    `${BASE_URL}/movie/${id}?&append_to_response=credits`,
    requestOptions
  );
};

const getActor = (id) => {
  return get(
    `${BASE_URL}/person/${id}?append_to_response=movie_credits`,
    requestOptions
  );
};

export default {
  getPopularMovies,
  getNowPlaying,
  getTopRated,
  getMovie,
  getActor,
  getGenres,
  getMoviesByGenre,
};
