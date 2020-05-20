import React, { useState } from "react";
import PropTypes from "prop-types";

import { filterCompanies } from "../../utils/filter";

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
  companies: PropTypes.array,
  setCompanies: PropTypes.func,
  setCurrentPage: PropTypes.func,
};
