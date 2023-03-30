import "../styles/Pagination.scss";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Pagination = ({
  page,
  numPages,
  hasPreviousPage,
  onPreviousPage,
  hasNextPage,
  onNextPage,
}) => {
  const scrollBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="pagination d-flex justify-content-between align-items-center mt-3">
      <div className="previous-page">
        <IconButton
          disabled={!hasPreviousPage}
          onClick={onPreviousPage}
          onMouseUp={scrollBackToTop}
          variant="warning"
        >
          <ArrowBackIosNewIcon style={{ fill: "#282828" }} />
        </IconButton>
      </div>

      <div className="current-page">
        {page} / {numPages}
      </div>

      <div className="next-page">
        <IconButton
          disabled={!hasNextPage}
          onClick={onNextPage}
          onMouseUp={scrollBackToTop}
          variant="warning"
        >
          <ArrowForwardIosIcon style={{ fill: "#282828" }} />
        </IconButton>
      </div>
    </div>
  );
};

export default Pagination;
