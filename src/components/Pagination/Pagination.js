import React from "react";
import PropTypes from "prop-types";
import leftArrow from "../../assets/arrow-left.png";
import rightArrow from "../../assets/arrow-right.png";

export const Pagination = ({ currentPage, setCurrentPage, pages }) => {
  const pageDown = () => {
    if (currentPage > 0) setCurrentPage((prevPage) => prevPage - 1);
  };

  const pageUp = () => {
    if (currentPage + 1 < pages) setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="pagination">
      <img src={leftArrow} alt="Previous" onClick={() => pageDown()} />
      <p>{`${currentPage + 1}/${pages}`}</p>
      <img src={rightArrow} alt="Next" onClick={() => pageUp()} />
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
  pages: PropTypes.number,
};
