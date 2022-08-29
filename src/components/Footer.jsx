import React from "react";
import "../styles/Footer.scss";

const Footer = ({ page, totalPages, turnPage, genre, category, sort }) => {
  return (
    <>
      <footer>
        <button>previous</button>
        <span>{page} / totalPages</span>
        <button>next</button>
      </footer>
    </>
  );
};

export default Footer;
