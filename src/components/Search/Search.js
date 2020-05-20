import React, { useState } from "react";

import { filterCompanies } from "../../utils/filter";

export const Search = ({
  companiesArray,
  setCompaniesArray,
  setCurrentPage,
}) => {
  const [companies] = useState(companiesArray);
  const handleChange = async (e) => {
    setCurrentPage(0);
    const filteredCompanies = await filterCompanies(companies, e.target.value);
    setCompaniesArray(filteredCompanies);
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
