import React from "react";
import PropTypes from "prop-types";

import { getPages } from "../../../utils/getPages";

/**
 * Pages component displays current page and rest of avaiable pages. It uses proper function to show 2 next/previous pages.
 */

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
  /** Number of current page of the table */
  currentPage: PropTypes.number,
  /** Function to change current page of the table  */
  setCurrentPage: PropTypes.func,
  /** Number of all pages in the table */
  pages: PropTypes.number,
};
