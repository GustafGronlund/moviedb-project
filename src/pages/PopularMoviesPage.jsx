import { useState } from "react";
import { useQuery } from "react-query";
import { Link, useSearchParams } from "react-router-dom";
import PopularMovies from "../components/PopularMovies";
import "../styles/PopularMoviesPage.scss";
import Footer from "../components/Footer";

const PopularMoviesPage = () => {
  // const [pageTitle, setPageTitle] = useState("Action");
  // const [searchParams, setSearchParams] = useSearchParams({
  //   page: 1,
  //   genre: 28,
  //   sort: "",
  // });
  // const page = searchParams.get("page");
  // const genre = searchParams.get("genre");
  // const sort = searchParams.get("sort");

  return (
    <div>
      <PopularMovies />
      {/* <Footer
        page={page}
        genre={genre}
        sort={sort}
        totalPages={data.total_pages}
        turnPage={setSearchParams}
      /> */}
    </div>
  );
};

export default PopularMoviesPage;
