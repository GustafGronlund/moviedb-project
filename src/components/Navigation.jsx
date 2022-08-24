import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/">
          STREAMTAJM
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} end to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} end to="/nowplaying">
              Now Playing
            </Nav.Link>
            <Nav.Link as={NavLink} end to="/popularmovies">
              Popular Movies
            </Nav.Link>
            <Nav.Link as={NavLink} end to="/topratedmovies">
              Top Rated Movies
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
