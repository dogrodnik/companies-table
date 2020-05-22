import React, { useState } from "react";
import PropTypes from "prop-types";

import { filterCompanies } from "../../utils/filter";

/**
 * Search is used to filter companies by user input .
 */

export const Search = ({ companies, setCompanies, setCurrentPage }) => {
  const [companiesData] = useState(companies);
  const handleChange = async (e) => {
    setCurrentPage(0);
    const filteredCompanies = await filterCompanies(
      companiesData,
      e.target.value
    );
    setCompanies(filteredCompanies);
  };
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

Search.propTypes = {
  /** Array of fetched companies */
  companies: PropTypes.array,
  /** Function to set filtered companies */
  setCompanies: PropTypes.func,
  /** Function to set proper page after filtering */
  setCurrentPage: PropTypes.func,
};
