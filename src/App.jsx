import React, { useRef, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import NowPlayingPage from "./pages/NowPlayingPage";
import PopularMoviesPage from "./pages/PopularMoviesPage";
import TopRatedMoviesPage from "./pages/TopRatedMoviesPage";
import GenresPage from "./pages/GenresPage";
import SelectedGenresPage from "./pages/SelectedGenresPage";
import Movie from "./pages/Movie";
import ActorPage from "./pages/ActorPage";
import { ReactQueryDevtools } from "react-query/devtools";
// import "./assets/scss/App.scss";
import "./styles/App.scss";
import "./assets/scss/fonts/RoobertTRIAL-Regular.woff";

function App() {
  return (
    <div id="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/nowplaying" element={<NowPlayingPage />} />
        <Route path="/popularmovies" element={<PopularMoviesPage />} />
        <Route path="/topratedmovies" element={<TopRatedMoviesPage />} />
        <Route path="/genres" element={<GenresPage />} />
        <Route path="/genres/:name/:id" element={<SelectedGenresPage />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="actor/:id" element={<ActorPage />} />
      </Routes>
      {/* <ReactQueryDevTools /> */}

      <ReactQueryDevtools position="bottom-right" />
    </div>
  );
}

export default App;
