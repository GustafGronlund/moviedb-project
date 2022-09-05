import React from "react";
import "../styles/Footer.scss";

const Footer = () => {
  const [page, setPage] = useSate();

  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => prev - 1);

  return (
    <>
      <footer>
        <button onClick={prevPage} disabled={page === 1}>
          prev page
        </button>
        <button onClick={nextPage} disabled={!posts.length}>
          next page
        </button>
      </footer>
    </>
  );
};

export default Footer;
