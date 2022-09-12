import PopularMovies from "../components/PopularMovies";
import { Link } from "react-router-dom";
import "../styles/HomePage.scss";

const HomePage = () => {
  return (
    <div>
      <section className="hero-section">
        <h1>HOMEPAGE</h1>
        <h3>
          Click on the menu to explore movies, it's all fetched from TMDB API.
        </h3>
        <h3>This page is created with React. :)</h3>
      </section>
    </div>
  );
};

export default HomePage;
