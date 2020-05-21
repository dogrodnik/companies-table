import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import leftArrow from "../../assets/arrow-left.png";
import rightArrow from "../../assets/arrow-right.png";

import { Pages } from "./Pages";

export const Pagination = ({ currentPage, setCurrentPage, pages }) => {
  const [arrows, setArrows] = useState(false);

  useEffect(() => (pages > 5 ? setArrows(true) : setArrows(false)), [pages]);

  const pageDown = () => {
    if (currentPage > 0) setCurrentPage((prevPage) => prevPage - 1);
  };

  const pageUp = () => {
    if (currentPage + 1 < pages) setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="pagination">
      {arrows && <img src={leftArrow} alt="Prev" onClick={() => pageDown()} />}
      <Pages
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pages={pages}
      />
      {arrows && <img src={rightArrow} alt="Next" onClick={() => pageUp()} />}
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
  pages: PropTypes.number,
};
