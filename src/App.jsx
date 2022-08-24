import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import NowPlaying from "./pages/NowPlaying";
import PopularMovies from "./pages/PopularMovies";
import TopRatedMovies from "./pages/TopRatedMovies";
import Movie from "./pages/Movie";
import Actor from "./pages/Actor";
import "./assets/scss/App.scss";

function App() {
  return (
    <div id="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/nowplaying" element={<NowPlaying />} />
        <Route path="/popularmovies" element={<PopularMovies />} />
        <Route path="/TopRatedMovies" element={<TopRatedMovies />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="actor/:id" element={<Actor />} />
      </Routes>
    </div>
  );
}

export default App;
