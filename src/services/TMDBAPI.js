import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const API_KEY = "?api_key=870af7a7e82a463bd2c88eb97fc1f3e1&language=en-US";
const adultCont = "&include_adult=false";
const credits = "&append_to_response=credits";

export const get = async (endpoint) => {
  const response = await axios.get(endpoint);

  return response.data;
};

// Get popular movies
export const getPopularMovies = () => {
  return get(`${axios.defaults.baseURL}/movie/popular${API_KEY}${adultCont}`);
};

// Get single movies based on id
export const getSingleMovie = ({ queryKey }) => {
  const [_key, id] = queryKey;

  return get(
    `${axios.defaults.baseURL}/movie/${id}${API_KEY}${adultCont}${credits}`
  );
};

export const getActor = ({ queryKey }) => {
  const [_key, id] = queryKey;

  return get(`${axios.defaults.baseURL}/person/${id}${API_KEY}`);
};
