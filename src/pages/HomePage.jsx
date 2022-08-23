import Container from "react-bootstrap/Container";
import PopularMovies from "../components/PopularMovies";

const HomePage = () => {
  return (
    <Container className="py-3">
      <PopularMovies />
    </Container>
  );
};

export default HomePage;
