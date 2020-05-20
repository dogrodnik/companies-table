import React, { useState } from "react";
import PropTypes from "prop-types";

import { sort } from "../../../utils/sort";

export const Header = ({ companies, setCompanies }) => {
  const [sortType, setSortType] = useState({
    id: false,
    name: false,
    city: false,
    totalIncome: false,
    averageIncome: false,
    lastMonthIncome: false,
  });

  const sortCompanies = async ({ target: { id: searchType } }) => {
    const sortedCompanies = await sort(
      companies,
      searchType,
      sortType[searchType]
    );
    setSortType({ ...sortType, [searchType]: !sortType[searchType] });
    setCompanies([...sortedCompanies]);
  };

  return (
    <thead>
      <tr>
        <th id="id" onClick={(e) => sortCompanies(e)}>
          ID
        </th>
        <th id="name" onClick={(e) => sortCompanies(e)}>
          Name
        </th>
        <th id="city" onClick={(e) => sortCompanies(e)}>
          City
        </th>
        <th id="totalIncome" onClick={(e) => sortCompanies(e)}>
          Total Income
        </th>
        <th id="averageIncome" onClick={(e) => sortCompanies(e)}>
          Average Income
        </th>
        <th id="lastMonthIncome" onClick={(e) => sortCompanies(e)}>
          Last Month Income
        </th>
      </tr>
    </thead>
  );
};

Header.propTypes = {
  companies: PropTypes.array,
  setCompanies: PropTypes.func,
};
