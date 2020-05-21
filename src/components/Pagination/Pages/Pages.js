import React from "react";
import PropTypes from "prop-types";

import { getPages } from "../../../utils/getPages";

export const Pages = ({ currentPage, setCurrentPage, pages }) => (
  <div className="pagination__numbers">
    {getPages([...Array(pages).keys()], currentPage).map((number, index) => (
      <p
        className={number === currentPage ? "active" : ""}
        onClick={() => setCurrentPage(number)}
        key={index}
      >
        {number + 1}
      </p>
    ))}
  </div>
);

Pages.propTypes = {
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
  pages: PropTypes.number,
};
