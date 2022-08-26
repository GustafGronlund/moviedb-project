import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const API_KEY = "?api_key=870af7a7e82a463bd2c88eb97fc1f3e1&language=en-US";
const adultCont = "&include_adult=false";
const credits = "&append_to_response=credits";

export const get = async (endpoint) => {
  const response = await axios.get(endpoint);

  return response.data;
};

// get all the popular movies
export const getPopularMovies = () => {
  return get(`${axios.defaults.baseURL}/movie/popular${API_KEY}${adultCont}`);
};

// get all the popular movies
export const getTopRatedMovies = () => {
  return get(`${axios.defaults.baseURL}/movie/top_rated${API_KEY}${adultCont}`);
};

// get all the latest movies
export const getLatestMovies = () => {
  return get(
    `${axios.defaults.baseURL}/movie/now_playing${API_KEY}${adultCont}`
  );
};

// get specific movie based on id
export const getMovie = ({ queryKey }) => {
  const [_key, id] = queryKey;

  return get(
    `${axios.defaults.baseURL}/movie/${id}${API_KEY}${adultCont}${credits}`
  );
};

// get specific actor based on id
export const getActor = ({ queryKey }) => {
  const [_key, id] = queryKey;

  return get(`${axios.defaults.baseURL}/person/${id}${API_KEY}${credits}`);
};
