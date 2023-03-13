import React from "react";
// import Button from "react-bootstrap/Button";
import "../styles/Pagination.scss";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Pagination = ({
  page,
  numPages,
  hasPreviousPage,
  onPreviousPage,
  hasNextPage,
  onNextPage,
}) => {
  return (
    <div className="pagination d-flex justify-content-between align-items-center mt-3">
      <div className="previous-page">
        <IconButton
          disabled={!hasPreviousPage}
          onClick={onPreviousPage}
          variant="warning"
        >
          <ArrowBackIosNewIcon style={{ fill: "#282828" }} />
        </IconButton>
      </div>

      <div className="current-page">
        {page}
        <p></p> / {numPages}
      </div>

      <div className="next-page">
        <IconButton
          disabled={!hasNextPage}
          onClick={onNextPage}
          variant="warning"
        >
          <ArrowForwardIosIcon style={{ fill: "#282828" }} />
        </IconButton>
      </div>
    </div>
  );
};

export default Pagination;
