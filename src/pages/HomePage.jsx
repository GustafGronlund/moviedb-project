import "../styles/HomePage.scss";
import movieCameraAnimation from "../assets/scss/json/movie_camera.json";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="hero-section">
        <Lottie
          className="svg-animation"
          animationData={movieCameraAnimation}
          loop={true}
          style={{ height: 200, width: 200 }}
        />
        <h1>Welcome to FilmFiesta!</h1>
        <p>
          The application is built using data from the API The Movie DB,
          ensuring you have access to the latest information on your favorite
          films.
        </p>
        <p>
          Whether you're in the mood for action, romance, or comedy, you can
          start exploring movies based on the topics from our easy-to-use menu.
          Or, if you're looking for some inspiration, simply push the button to
          discover the most popular movies at the moment.
        </p>
        <button onClick={() => navigate("/popularMovies")}>Enter</button>
      </section>
    </div>
  );
};

export default HomePage;
