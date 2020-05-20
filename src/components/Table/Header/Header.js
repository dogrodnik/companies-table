import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    sortCompanies("id");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sortCompanies = async (searchType) => {
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
        {Object.keys(sortType).map((key) => (
          <th id={key} onClick={({ target: { id } }) => sortCompanies(id)}>
            {key.split(/(?=[A-Z])/).join(" ")}
          </th>
        ))}
      </tr>
    </thead>
  );
};

Header.propTypes = {
  companies: PropTypes.array,
  setCompanies: PropTypes.func,
};
