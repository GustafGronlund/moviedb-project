import Container from "react-bootstrap/Container";
import PopularMovies from "../components/PopularMovies";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <Container className="py-3">
      <PopularMovies />
    </Container>
  );
};

export default HomePage;
