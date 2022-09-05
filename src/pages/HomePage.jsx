import PopularMovies from "../components/PopularMovies";
import { Link } from "react-router-dom";
import "../styles/HomePage.scss";

const HomePage = () => {
  return (
    <div>
      <section className="hero-section">
        <p>Welcome to this page.</p>
        <p>
          Click on the menu to explore movies, it's all fetched from tmdb api.
        </p>
        <p>This page is created with React. :)</p>
      </section>
    </div>
  );
};

export default HomePage;
