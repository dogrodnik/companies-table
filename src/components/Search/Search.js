import React, { useState } from "react";

import { filterCompanies } from "../../utils/filter";

export const Search = ({ companiesArray, setCompaniesArray }) => {
  const [companies] = useState(companiesArray);
  const handleChange = async (e) => {
    const filteredCompanies = await filterCompanies(companies, e.target.value);
    setCompaniesArray(filteredCompanies);
  };
  return (
    <div>
      <input type="text" onChange={(e) => handleChange(e)} />
    </div>
  );
};
